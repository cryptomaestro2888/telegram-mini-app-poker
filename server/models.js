const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  name: String,
  players: [{
    id: String,
    name: String,
    isAI: Boolean
  }],
  gameState: mongoose.Schema.Types.Mixed
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = { Room };