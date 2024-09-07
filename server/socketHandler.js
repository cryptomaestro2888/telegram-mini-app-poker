const { Room } = require('./models');
const roomManager = require('./roomManager');
const gameLogic = require('./gameLogic');
const logger = require('./logger');

function handleSocket(io, socket) {
  logger.info('A user connected', { userId: socket.userId });

  socket.on('create-room', async (roomName, callback) => {
    try {
      const room = await roomManager.createRoom(roomName, socket.userId);
      socket.join(room._id);
      callback({ roomId: room._id, roomName: room.name });
      
      // Start the game immediately after room creation
      await gameLogic.startGame(io, room._id);
    } catch (error) {
      handleError(socket, 'Failed to create room or start game', error);
      callback({ error: 'Failed to create room or start game' });
    }
  });

  socket.on('join-room', async (roomId, callback) => {
    try {
      const room = await Room.findById(roomId);
      if (!room) {
        return callback({ error: 'Room not found' });
      }

      const playerIndex = room.players.findIndex(p => p.id === socket.userId);
      if (playerIndex !== -1) {
        await handleRejoin(socket, room, callback);
      } else if (room.players.length < 4) {
        await handleNewJoin(io, socket, room, callback);
      } else {
        callback({ error: 'Room is full' });
      }
    } catch (error) {
      handleError(socket, 'Failed to join room', error);
      callback({ error: 'Failed to join room' });
    }
  });

  socket.on('game-action', async (action) => {
    try {
      const room = await roomManager.findRoomByPlayerId(socket.userId);
      if (!room) {
        throw new Error('Room not found');
      }
      if (room.gameState.currentPlayerIndex !== room.players.findIndex(p => p.id === socket.userId)) {
        throw new Error('Not your turn');
      }
      await gameLogic.processGameAction(io, room._id, socket.userId, action);
    } catch (error) {
      handleError(socket, 'Failed to process game action', error);
    }
  });

  socket.on('disconnect', async () => {
    try {
      const room = await roomManager.findRoomByPlayerId(socket.userId);
      if (room) {
        await roomManager.removePlayerFromRoom(room._id, socket.userId);
        io.to(room._id).emit('player-left', socket.userId);
        
        // Check if the game should end due to insufficient players
        if (room.players.length < 2) {
          await gameLogic.endGame(io, room._id);
        }
      }
    } catch (error) {
      logger.error('Error handling disconnect', { userId: socket.userId, error: error.message });
    }
  });
}

async function handleRejoin(socket, room, callback) {
  socket.join(room._id);
  callback({ message: 'Rejoined room', gameState: room.gameState });
  socket.to(room._id).emit('player-rejoined', socket.userId);
}

async function handleNewJoin(io, socket, room, callback) {
  room.players.push({ id: socket.userId, name: 'Human Player', isAI: false });
  await room.save();
  socket.join(room._id);
  io.to(room._id).emit('player-joined', { playerId: socket.userId });
  callback({ message: 'Joined room', gameState: room.gameState });

  if (room.players.length === 4 && !room.gameState) {
    await gameLogic.startGame(io, room._id);
  }
}

function handleError(socket, message, error) {
  logger.error(message, { userId: socket.userId, error: error.message });
  socket.emit('error', message);
}

module.exports = handleSocket;