require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const TelegramBot = require('node-telegram-bot-api');
const crypto = require('crypto');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { evaluateHand, compareHands } = require('./pokerLogic');
const { ValidationError } = require('joi');
const logger = require('./logger');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// User model
const userSchema = new mongoose.Schema({
  telegramId: String,
  username: String,
  isAI: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

// Room model
const roomSchema = new mongoose.Schema({
  name: String,
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  gameState: {
    deck: [String],
    communityCards: [String],
    currentPlayer: Number,
    pot: Number,
    playerStates: [{
      userId: mongoose.Schema.Types.ObjectId,
      chips: Number,
      hand: [String],
      bet: Number,
      folded: Boolean,
      showCards: Boolean,
      disconnected: Boolean
    }],
    round: String,
    smallBlind: Number,
    bigBlind: Number,
    lastRaiseAmount: Number,
    dealerPosition: Number,
    winners: [{
      userId: mongoose.Schema.Types.ObjectId,
      handType: String,
      winAmount: Number
    }],
    handHistory: [String]
  }
});

const Room = mongoose.model('Room', roomSchema);

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001'
}));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Telegram Bot setup
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
if (!TELEGRAM_BOT_TOKEN) {
  logger.error('TELEGRAM_BOT_TOKEN is not set in the environment variables');
  process.exit(1);
}
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  logger.error('JWT_SECRET is not set in the environment variables');
  process.exit(1);
}

// Authentication middleware
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

// Routes
app.post('/auth', async (req, res) => {
  const schema = Joi.object({
    auth_date: Joi.number().required(),
    first_name: Joi.string(),
    id: Joi.number().required(),
    hash: Joi.string().required(),
    // Add other fields as needed
  });

  try {
    const { error, value } = schema.validate(req.body);
    if (error) throw error;

    const { auth_date, hash, ...userData } = value;

    // Verify the authentication data
    const dataCheckString = Object.keys(userData)
      .sort()
      .map(key => `${key}=${userData[key]}`)
      .join('\n');

    console.log('Data Check String:', dataCheckString); // Log the data check string
    console.log('TELEGRAM_BOT_TOKEN:', TELEGRAM_BOT_TOKEN); // Log the generated hash

    const secretKey = crypto.createHash('sha256')
      .update(TELEGRAM_BOT_TOKEN)
      .digest('hex');

    const generatedHash = crypto.createHmac('sha256', secretKey)
      .update(dataCheckString)
      .digest('hex');

    console.log('Generated Hash:', generatedHash); // Log the generated hash
    console.log('Provided Hash:', hash); // Log the provided hash

    // if (generatedHash !== hash) {
    //   return res.status(401).json({ error: 'Authentication failed' });
    // }

    // Check if user exists, if not create a new user
    let user = await User.findOne({ telegramId: userData.id });
    if (!user) {
      user = new User({
        telegramId: userData.id,
        username: userData.username || `User${userData.id}`,
        // Add other fields as needed
      });
      await user.save();
      logger.info('New user created', { userId: user._id, telegramId: userData.id });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });

    logger.info('User authenticated', { userId: user._id, telegramId: userData.id });
    res.json({ token, user: { _id: user._id, username: user.username } });
  } catch (error) {
    if (error instanceof ValidationError) {
      logger.warn('Validation error during authentication', { error: error.message });
      return res.status(400).json({ error: error.details[0].message });
    }
    logger.error('Authentication error', { error: error.message, stack: error.stack });
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/rooms', authenticateJWT, async (req, res) => {
  try {
    const rooms = await Room.aggregate([
      {
        $project: {
          name: 1,
          players: 1,
          playerCount: { $size: "$players" }
        }
      },
      {
        $match: {
          playerCount: { $lt: 4 }
        }
      }
    ]);
    res.json(rooms);
  } catch (error) {
    logger.error('Error fetching rooms', { userId: req.user.id, error: error.message, stack: error.stack });
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
});

// Protect routes with JWT authentication
app.use(authenticateJWT);

// Function to create a delay
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function createRoomWithAI(creatorId, roomName, socket) {
  try {
    const room = new Room({
      name: roomName,
      players: [creatorId],
    });

    // Add 3 AI players
    for (let i = 0; i < 3; i++) {
      const aiPlayer = await createAIPlayer();
      room.players.push(aiPlayer._id);
    }

    await room.save();
    logger.info('New room created with AI players', { userId: creatorId, roomId: room._id, roomName: room.name, playerCount: room.players.length });
    
    // Start game immediately
    startGame(room._id, socket);

    return {
      _id: room._id,
      name: room.name,
      players: room.players.map(playerId => ({
        _id: playerId,
        username: playerId === creatorId ? 'You' : 'AI Player'
      }))
    };
  } catch (error) {
    logger.error('Error creating room', { userId: creatorId, error: error.message, stack: error.stack });
    throw error;
  }
}

// Add this function to create an AI player
async function createAIPlayer() {
  const aiPlayer = new User({
    username: `AI_${Math.random().toString(36).substring(7)}`,
    isAI: true
  });
  await aiPlayer.save();
  return aiPlayer;
}

// Modify the existing route for room creation
app.post('/create-room', authenticateJWT, async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(30),
  });

  try {
    const { error, value } = schema.validate(req.body);
    if (error) throw error;

    const room = await createRoomWithAI(req.user.id, value.name);
    res.json({ roomId: room._id, roomName: room.name, players: room.players });
  } catch (error) {
    logger.error('Create room error', { userId: req.user.id, error: error.message, stack: error.stack });
    res.status(500).json({ error: 'Failed to create room' });
  }
});

app.post('/join-room', authenticateJWT, async (req, res) => {
  const schema = Joi.object({
    roomId: Joi.string().required().length(24),
  });

  try {
    const { error, value } = schema.validate(req.body);
    if (error) throw error;

    const room = await Room.findById(value.roomId);
    if (!room) {
      logger.warn('Attempt to join non-existent room', { userId: req.user.id, roomId: value.roomId });
      return res.status(404).json({ error: 'Room not found' });
    }

    if (room.players.length >= 4) {
      logger.warn('Attempt to join full room', { userId: req.user.id, roomId: value.roomId });
      return res.status(400).json({ error: 'Room is full' });
    }

    if (!room.players.includes(req.user.id)) {
      room.players.push(req.user.id);
      await room.save();
    }

    logger.info('Player joined room', { userId: req.user.id, roomId: value.roomId });
    res.json({ message: 'Joined room successfully' });
  } catch (error) {
    if (error instanceof ValidationError) {
      logger.warn('Validation error during room join', { userId: req.user.id, error: error.message });
      return res.status(400).json({ error: error.details[0].message });
    }
    logger.error('Join room error', { userId: req.user.id, error: error.message, stack: error.stack });
    res.status(500).json({ error: 'Failed to join room' });
  }
});

// Socket.io connection handling
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error('Authentication error'));
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return next(new Error('Authentication error'));
    socket.userId = decoded.id;
    next();
  });
});

function getRoom(socket) {
  var room;
  for (let aRoom of socket.rooms) {
    if (aRoom !== socket.id) {
      room = aRoom;
    }
  }
  return room;
}

// Socket.io events
io.on('connection', (socket) => {
  logger.info('New client connected', { userId: socket.userId });

  socket.on('join-room', async (roomId, callback) => {
    try {
      const room = await Room.findById(roomId);
      if (!room) {
        throw new Error('Room not found');
      }

      // Check if the user is already in the room
      const isPlayerInRoom = room.players.some(player => player.toString() === socket.userId);
      if (!isPlayerInRoom) {
        throw new Error('You are not a player in this room');
      }

      await socket.join(roomId);
      socket.roomId = roomId;

      // Send the current game state to the player who joined
      callback({ gameState: room.gameState });

      // Inform all clients in the room (including the one who just joined) that a new player has joined
      io.to(roomId).emit('player-joined', { userId: socket.userId });

      // Send a welcome message to all clients in the room
      io.to(roomId).emit('room-message', 'A new player has joined the room');

      logger.info('Player joined room', { userId: socket.userId, roomId: roomId });
    } catch (error) {
      logger.error('Error joining room', { userId: socket.userId, roomId: roomId, error: error.message });
      callback({ error: error.message });
    }
  });

  socket.on('leave-room', async (callback) => {
    if (socket.roomId) {
      await socket.leave(socket.roomId);
      await cleanupGameState(socket.roomId, socket.userId);
      socket.roomId = null;
      callback();
    } else {
      callback(new Error('Not in a room'));
    }
  });

  socket.on('game-action', async (action) => {
    if (!socket.roomId) {
      socket.emit('error', 'Not in a room');
      return;
    }
    
    try {
      const room = await Room.findById(socket.roomId).populate('players');
      if (!room) throw new Error('Room not found');

      const updatedGameState = await processGameAction(room, socket.userId, action, socket);
      io.to(socket.roomId).emit('game-update', {gameState: updatedGameState, room: room});

      if (updatedGameState.round === 'ended') {
        setTimeout(() => startGame(socket.roomId), 5000);
      }
    } catch (error) {
      logger.error('Error processing game action', { userId: socket.userId, roomId: socket.roomId, action, error: error.message });
      socket.emit('error', error.message);
    }
  });

  socket.on('showdown-action', async (action) => {
    if (!socket.roomId) {
      socket.emit('error', 'Not in a room');
      return;
    }

    try {
      const room = await Room.findById(socket.roomId).populate('players');
      if (!room || room.gameState.round !== 'showdown') {
        socket.emit('error', 'Invalid showdown action');
        return;
      }

      const playerState = room.gameState.playerStates.find(p => p.userId.toString() === socket.userId.toString());
      if (!playerState) {
        socket.emit('error', 'Player not found');
        return;
      }

      playerState.showCards = action.action === 'show';

      // If all players have made a decision, end the hand
      const allDecided = room.gameState.playerStates.every(p => p.folded || p.showCards !== undefined);
      if (allDecided) {
        const updatedGameState = endHand(room.gameState, room);
        room.gameState = updatedGameState;
        await room.save();
        io.to(socket.roomId).emit('game-update', {gameState: updatedGameState, room: room});

        // Start a new game after a delay
        setTimeout(() => startGame(socket.roomId), 5000);
      } else {
        await room.save();
        io.to(socket.roomId).emit('game-update', {room, gameState: room.gameState});
      }
    } catch (error) {
      logger.error('Error processing showdown action', { userId: socket.userId, roomId: socket.roomId, action, error: error.message, stack: error.stack });
      socket.emit('error', 'Failed to process showdown action');
    }
  });

  socket.on('chat-message', async (message) => {
    if (!socket.roomId) {
      return socket.emit('error', 'Not in a room');
    }

    try {
      if (typeof message !== 'string' || message.trim().length === 0) {
        throw new Error('Invalid message');
      }

      const user = await User.findById(socket.userId);
      if (!user) {
        throw new Error('User not found');
      }

      const chatMessage = {
        userId: socket.userId,
        username: user.username,
        message: message.trim(),
        timestamp: new Date()
      };
      io.to(socket.roomId).emit('chat-message', chatMessage);
    } catch (error) {
      logger.error('Error sending chat message', { userId: socket.userId, roomId: socket.roomId, message: message, error: error.message, stack: error.stack });
      socket.emit('error', `Failed to send chat message: ${error.message}`);
    }
  });

  socket.on('disconnect', async () => {
    logger.info('Client disconnected', { userId: socket.userId });
    if (socket.roomId) {
      const room = await Room.findById(socket.roomId);
      if (room) {
        // Mark the player as disconnected in the game state
        const playerIndex = room.gameState.playerStates.findIndex(p => p.userId.toString() === socket.userId.toString());
        if (playerIndex !== -1) {
          room.gameState.playerStates[playerIndex].disconnected = true;
          await room.save();
          io.to(socket.roomId).emit('player-disconnected', { userId: socket.userId });
        }
      }
    }
  });

  socket.on('reconnect_attempt', () => {
    socket.auth = { token: socket.handshake.auth.token };
  });

  socket.on('rejoin-room', async (roomId) => {
    try {
      const room = await Room.findById(roomId);
      if (!room) {
        throw new Error('Room not found');
      }

      const playerIndex = room.gameState.playerStates.findIndex(p => p.userId.toString() === socket.userId.toString());
      if (playerIndex !== -1) {
        room.gameState.playerStates[playerIndex].disconnected = false;
        await room.save();
        await socket.join(roomId);
        socket.roomId = roomId;
        socket.emit('game-state', room.gameState);
        io.to(roomId).emit('player-reconnected', { userId: socket.userId });
      } else {
        throw new Error('Player not found in the room');
      }
    } catch (error) {
      logger.error('Error rejoining room', { userId: socket.userId, roomId: roomId, error: error.message });
      socket.emit('error', `Failed to rejoin room: ${error.message}`);
    }
  });

  // Modify the socket.io 'create-room' event handler
  socket.on('create-room', async (roomName, callback) => {
    try {
      const room = await createRoomWithAI(socket.userId, roomName, socket);
      callback({ roomId: room._id, roomName: room.name, players: room.players });
    } catch (error) {
      logger.error('Error creating room', { userId: socket.userId, error: error.message, stack: error.stack });
      callback({ error: 'Failed to create room' });
    }
  });

  //Send messages
  socket.on('message', (message) => {
    var room = getRoom(socket);
    socket.to(room).emit('message', `${message}`);          
  });
});

async function startGame(roomId, socket) {
  try {
    const room = await Room.findById(roomId).populate('players');
    if (!room || room.players.length !== 4) {
      logger.error('Invalid room state for starting game', { roomId, playerCount: room?.players.length });
      return;
    }

    room.gameState = initializeGameState(room.players);
    await room.save();

    logger.info('New game started', { roomId, playerCount: room.players.length });
    io.in(socket.roomId).emit('game-start', { message: 'New game started', gameState: room.gameState });

    // wait for 5 seconds before the first move
    setTimeout(() => triggerNextMove(room, socket), 2000);
  } catch (error) {
    logger.error('Error starting game', { roomId, error: error.message, stack: error.stack });
  }
}

async function processGameAction(room, userId, action, socket) {
  try {
    const gameState = room.gameState;
    logger.info('gameState', { gameState });
    // const playerIndex = gameState.playerStates.findIndex(p => p.userId === userId);

    // if (playerIndex === -1 || playerIndex !== gameState.currentPlayer) {
    //   throw new Error('Invalid player or not your turn');
    // }

    const currentPlayer = gameState.playerStates[gameState.currentPlayer];

    // Process the action (fold, call, raise)
    switch (action.type) {
      case 'fold':
        currentPlayer.folded = true;
        logger.info('Player folded', { roomId: room._id, userId });
        break;
      case 'call':
        const callAmount = gameState.lastRaiseAmount - currentPlayer.bet;
        if (callAmount > currentPlayer.chips) {
          throw new Error('Not enough chips to call');
        }
        currentPlayer.bet += callAmount;
        currentPlayer.chips -= callAmount;
        gameState.pot += callAmount;
        logger.info('Player called', { roomId: room._id, userId, amount: callAmount });
        break;
      case 'raise':
        const minRaise = Math.max(gameState.bigBlind, gameState.lastRaiseAmount * 2 - currentPlayer.bet);
        const maxRaise = currentPlayer.chips;
        if (action.amount < minRaise || action.amount > maxRaise) {
          throw new Error(`Invalid raise amount. Minimum raise: ${minRaise}, Maximum raise: ${maxRaise}`);
        }
        const raiseAmount = action.amount;
        currentPlayer.chips -= raiseAmount;
        gameState.pot += raiseAmount;
        gameState.lastRaiseAmount = currentPlayer.bet + raiseAmount;
        currentPlayer.bet += raiseAmount;
        logger.info('Player raised', { roomId: room._id, userId, amount: raiseAmount });
        break;
      default:
        throw new Error('Invalid action');
    }

    // Move to the next player
    let nextPlayerIndex = (gameState.currentPlayer + 1) % gameState.playerStates.length;

    // Skip folded players and players who are all-in
    while (
      gameState.playerStates[nextPlayerIndex].folded ||
      gameState.playerStates[nextPlayerIndex].chips === 0
    ) {
      nextPlayerIndex = (nextPlayerIndex + 1) % gameState.playerStates.length;
      
      // If we've gone full circle, break to avoid infinite loop
      if (nextPlayerIndex === gameState.currentPlayer) {
        break;
      }
    }

    gameState.currentPlayer = nextPlayerIndex;

    // Before saving, update player details
    gameState.playerStates = gameState.playerStates.map((state, index) => ({
      ...state,
      username: room.players[index].username,
      isAI: room.players[index].isAI
    }));

    room.gameState = gameState;
    await room.save();

    logger.info('gameState', { gameState });

    // Emit the updated game state
    io.to(socket.roomId).emit('game-update', {room, gameState});

    // Check if the round is complete
    if (isRoundComplete(gameState)) {
      await moveToNextRound(room, socket);
    } else {
      // Trigger the next move
      triggerNextMove(room, socket);
    }

    return gameState;
  } catch (error) {
    logger.error('Error processing game action', { roomId: room._id, userId, action, error: error.message });
    throw error;
  }
}

function isRoundComplete(gameState) {
  const activePlayers = gameState.playerStates.filter(p => !p.folded);
  const allPlayersBetEqual = activePlayers.every(p => p.bet === gameState.lastRaiseAmount);
  const allPlayersHaveBet = activePlayers.every(p => p.bet > 0);
  return allPlayersBetEqual && allPlayersHaveBet;
}

async function moveToNextRound(room, socket) {
  const gameState = room.gameState;

  if (gameState.round === 'preflop') {
    gameState.round = 'flop';
    gameState.communityCards = [gameState.deck.pop(), gameState.deck.pop(), gameState.deck.pop()];
  } else if (gameState.round === 'flop') {
    gameState.round = 'turn';
    gameState.communityCards.push(gameState.deck.pop());
  } else if (gameState.round === 'turn') {
    gameState.round = 'river';
    gameState.communityCards.push(gameState.deck.pop());
  } else if (gameState.round === 'river') {
    gameState.round = 'showdown';
    
    // Implement showdown logic
    const activePlayers = gameState.playerStates.filter(p => !p.folded);
    const communityCards = gameState.communityCards;

    // Evaluate hands for each active player
    activePlayers.forEach(player => {
      const hand = [...player.cards, ...communityCards];
      player.handRank = evaluateHand(hand);
    });

    // Sort players by hand rank (assuming higher rank is better)
    activePlayers.sort((a, b) => b.handRank - a.handRank);

    // Determine winner(s)
    const winners = activePlayers.filter(p => p.handRank === activePlayers[0].handRank);

    // Split pot among winners
    const winAmount = Math.floor(gameState.pot / winners.length);
    winners.forEach(winner => {
      winner.chips += winAmount;
    });

    // Update game state with results
    gameState.winners = winners.map(w => ({
      userId: w.userId,
      username: w.username,
      handRank: w.handRank,
      winAmount: winAmount
    }));

    gameState.pot = 0;

    // Emit showdown results
    io.to(socket.roomId).emit('showdown-results', {
      winners: gameState.winners,
      playerHands: activePlayers.map(p => ({
        userId: p.userId,
        username: p.username,
        cards: p.cards,
        handRank: p.handRank
      }))
    });

    // Schedule the start of a new hand
    setTimeout(() => startNewHand(room, socket), 10000);
  }

  // Reset bets and move dealer button
  gameState.playerStates.forEach(p => p.bet = 0);
  gameState.lastRaiseAmount = 0;
  gameState.dealerPosition = (gameState.dealerPosition + 1) % gameState.playerStates.length;
  gameState.currentPlayer = (gameState.dealerPosition + 1) % gameState.playerStates.length;

  // Update player details
  gameState.playerStates = gameState.playerStates.map((state, index) => ({
    ...state,
    username: room.players[index].username,
    isAI: room.players[index].isAI
  }));

  room.gameState = gameState;
  await room.save();

  io.to(socket.roomId).emit('game-update', {gameState, room});

  // Trigger the next move
  triggerNextMove(room, socket);
}

async function makeAIMove(room, currentPlayer, socket) {
  try {
    const gameState = room.gameState;
    const action = determineAIAction(gameState, currentPlayer);

    // simulate AI thinking
    await sleep(Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000);

    logger.info('AI making move', { roomId: room._id, playerId: currentPlayer.userId, action });

    const updatedGameState = await processGameAction(room, currentPlayer.userId, action, socket);
    // io.to(room._id).emit('game-update', updatedGameState);
  } catch (error) {
    logger.error('Error making AI move', { roomId: room._id, error: error.message });
  }
}

function determineAIAction(gameState, player) {
  const callAmount = gameState.lastRaiseAmount - player.bet;
  const potOdds = callAmount / (gameState.pot + callAmount);
  const minRaise = Math.max(gameState.bigBlind, gameState.lastRaiseAmount * 2 - player.bet);

  if (player.chips < minRaise) {
    // Can't raise, so decide between calling and folding
    if (Math.random() < 0.3 || potOdds < 0.3) {
      return { type: 'call' };
    } else {
      return { type: 'fold' };
    }
  }

  if (Math.random() < 0.1) return { type: 'fold' };
  if (potOdds < 0.3 || Math.random() < 0.4) return { type: 'call' };

  const maxRaise = player.chips;
  const raiseAmount = Math.min(Math.max(minRaise, Math.floor(Math.random() * (player.chips / 2))), maxRaise);
  return { type: 'raise', amount: raiseAmount };
}

function initializeGameState(players) {
  const deck = createShuffledDeck();
  return {
    deck: deck,
    communityCards: [],
    currentPlayer: 0,
    pot: 0,
    playerStates: players.map((player, index) => ({
      userId: player._id,
      username: player.username,
      isAI: player.isAI,
      chips: 1000, // Starting chips
      hand: [deck.pop(), deck.pop()], // Deal two cards to each player
      bet: 0,
      folded: false,
      showCards: false,
      disconnected: false
    })),
    round: 'preflop',
    smallBlind: 5,
    bigBlind: 10,
    lastRaiseAmount: 10,
    dealerPosition: 0,
    winners: [],
    handHistory: []
  };
}

function createShuffledDeck() {
  const suits = ['♠', '♥', '♦', '♣'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const deck = suits.flatMap(suit => values.map(value => value + suit));
  return shuffle(deck);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Telegram Bot commands
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to the Poker Mini App! Use the menu to start playing.');
});

bot.onText(/\/newgame/, (msg) => {
  const chatId = msg.chat.id;
  // Here you would typically generate a deep link to your mini app with a new game parameter
  const gameLink = `https://t.me/your_bot_username/poker?startapp=newgame`;
  bot.sendMessage(chatId, `Click here to start a new game: ${gameLink}`);
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => logger.info(`Server running on port ${PORT}`));

async function triggerNextMove(room, socket) {
  try {
    const { gameState } = room;
    const currentPlayerIndex = gameState.currentPlayer;

    if (currentPlayerIndex < 0 || currentPlayerIndex >= gameState.playerStates.length) {
      logger.error('Invalid current player index', { roomId: room._id, currentPlayerIndex });
      await endGameDueToError(room._id);
      return;
    }

    const currentPlayer = gameState.playerStates[currentPlayerIndex];
    if (!currentPlayer) {
      logger.error('Current player not found', { roomId: room._id, currentPlayerIndex });
      await endGameDueToError(room._id);
      return;
    }

    logger.info('currentPlayer', { currentPlayer });

    // Check if the current player is an AI by comparing with the room's players
    const isAI = room.players[currentPlayerIndex].isAI;
    // logger.info('room', room.toJSON());

    if (isAI) {
      // For AI players, immediately trigger the AI move
      setImmediate(() => makeAIMove(room, currentPlayer, socket));
    } else {
      if (currentPlayer.disconnected) {
        logger.info('Current player is disconnected, moving to next player', { roomId: room._id, playerId: currentPlayer.userId });
        const nextPlayerIndex = getNextActivePlayer(gameState, currentPlayerIndex);
        
        // Check if we've looped through all players
        if (nextPlayerIndex === currentPlayerIndex) {
          logger.warn('All players are disconnected or folded', { roomId: room._id });
          await endGameDueToAllPlayersInactive(room._id);
          return;
        }
        
        gameState.currentPlayer = nextPlayerIndex;
        await room.save();
        return triggerNextMove(room, socket);
      }
      
      // For human players, emit the turn event
      logger.info('emitting player-turn', { roomId: socket.roomId, playerId: currentPlayer.userId });
      io.to(socket.roomId).emit('player-turn', { playerId: currentPlayer.userId });
      io.to(socket.roomId).emit('game-update', {gameState, room}); // Inform all players about whose turn it is
    }
  } catch (error) {
    logger.error('Error in triggerNextMove', { roomId: room._id, error: error.message, stack: error.stack });
    await endGameDueToError(room._id);
  }
}

async function endGameDueToAllPlayersInactive(roomId) {
  // Implement logic to end the game when all players are inactive
  // This might involve determining a winner based on who lasted longest, or declaring no winner
}





// Helper functions

async function endGameDueToError(roomId) {
  // Implement logic to end the game due to an error
  // This might involve notifying players, updating the room state, etc.
}

async function endGameDueToAllPlayersInactive(roomId) {
  // Implement logic to end the game when all players are inactive
  // This might involve determining a winner based on who lasted longest, or declaring no winner
}

function getSocketByUserId(userId) {
  // Implement logic to get a socket by user ID
  // This might involve maintaining a map of user IDs to socket IDs
}

function getNextActivePlayer(gameState, currentIndex) {
  let nextIndex = (currentIndex + 1) % gameState.playerStates.length;
  const startIndex = nextIndex;
  
  do {
    if (!gameState.playerStates[nextIndex].folded && !gameState.playerStates[nextIndex].disconnected) {
      return nextIndex;
    }
    nextIndex = (nextIndex + 1) % gameState.playerStates.length;
  } while (nextIndex !== startIndex);
  
  // If we've looped through all players and haven't found an active one, return the current index
  return currentIndex;
}