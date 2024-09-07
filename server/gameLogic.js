const { Room } = require('./models');
const logger = require('./logger');
const { evaluateHand, compareHands } = require('./pokerLogic');

function initializeGameState(players) {
  return {
    players: players.map(player => ({
      id: player.id,
      name: player.name,
      isAI: player.isAI,
      chips: 1000, // Starting chips
      hand: [],
      bet: 0,
      folded: false
    })),
    deck: createShuffledDeck(),
    communityCards: [],
    currentPlayerIndex: 0,
    pot: 0,
    round: 'preflop',
    smallBlind: 5,
    bigBlind: 10
  };
}

async function startGame(io, roomId) {
  const room = await Room.findById(roomId);
  if (!room) {
    logger.error('Room not found when starting game', { roomId });
    return;
  }

  room.gameState = initializeGameState(room.players);
  await room.save();

  logger.info('Game started', { roomId });
  io.to(roomId).emit('game-start', { message: 'New game started', gameState: room.gameState });
  
  await dealInitialCards(io, roomId);
  await startRound(io, roomId);
}

async function dealInitialCards(io, roomId) {
  const room = await Room.findById(roomId);
  if (!room) return;

  for (let i = 0; i < room.gameState.players.length; i++) {
    room.gameState.players[i].hand = [
      room.gameState.deck.pop(),
      room.gameState.deck.pop()
    ];
  }

  await room.save();
  io.to(roomId).emit('cards-dealt', { gameState: room.gameState });
}

async function startRound(io, roomId) {
  const room = await Room.findById(roomId);
  if (!room) return;

  const currentPlayer = room.gameState.players[room.gameState.currentPlayerIndex];

  if (currentPlayer.isAI) {
    setTimeout(() => handleAIAction(io, roomId), 1000); // Delay AI action for better UX
  } else {
    io.to(roomId).emit('player-turn', { playerId: currentPlayer.id });
  }
}

async function handleAIAction(io, roomId) {
  const room = await Room.findById(roomId);
  if (!room) return;

  const actions = ['fold', 'call', 'raise'];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  const action = { type: randomAction };

  if (action.type === 'raise') {
    action.amount = Math.floor(Math.random() * 100) + 1;
  }

  io.to(roomId).emit('game-action', { playerId: room.gameState.players[room.gameState.currentPlayerIndex].id, action });
}

async function processGameAction(io, roomId, playerId, action) {
  const room = await Room.findById(roomId);
  if (!room) return;

  // ... (existing processGameAction logic)

  room.gameState.currentPlayerIndex = (room.gameState.currentPlayerIndex + 1) % room.gameState.players.length;
  await room.save();

  io.to(roomId).emit('game-update', { gameState: room.gameState });

  await startRound(io, roomId);
}

// ... (other existing functions)

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

module.exports = {
  startGame,
  processGameAction,
  startRound
};