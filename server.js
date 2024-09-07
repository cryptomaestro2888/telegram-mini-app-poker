const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const handleSocket = require('./server/socketHandler');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// ... your existing Express middleware and route setup ...

io.on('connection', (socket) => handleSocket(io, socket));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));