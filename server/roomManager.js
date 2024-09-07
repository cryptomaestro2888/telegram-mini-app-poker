const { v4: uuidv4 } = require('uuid');
const { Room } = require('./models');
const logger = require('./logger');

async function createRoom(roomName, creatorId) {
  try {
    const roomId = uuidv4();
    const newRoom = new Room({
      _id: roomId,  // Use _id instead of id for MongoDB
      name: roomName,
      players: [
        { id: creatorId, name: 'Human Player', isAI: false },
        { id: uuidv4(), name: 'AI Player 1', isAI: true },
        { id: uuidv4(), name: 'AI Player 2', isAI: true },
        { id: uuidv4(), name: 'AI Player 3', isAI: true }
      ],
      gameState: null  // Initialize gameState as null
    });

    await newRoom.save();
    logger.info('Room created with AI players', { roomId: newRoom._id, creatorId });
    return newRoom;
  } catch (error) {
    logger.error('Error creating room', { error: error.message });
    throw error;
  }
}

async function getRoom(roomId) {
  // ... (existing getRoom logic)
}

async function addPlayerToRoom(roomId, playerId) {
  // ... (existing addPlayerToRoom logic)
}

async function removePlayerFromRoom(roomId, playerId) {
  // ... (existing removePlayerFromRoom logic)
}

async function findRoomByPlayerId(playerId) {
  // ... (existing findRoomByPlayerId logic)
}

module.exports = {
  createRoom,
  getRoom,
  addPlayerToRoom,
  removePlayerFromRoom,
  findRoomByPlayerId
};