const tg = window.Telegram.WebApp;

let token = localStorage.getItem('jwt_token');
let user = JSON.parse(localStorage.getItem('user') || '{}');
let socket;
let gameState = null;
let roomRefreshInterval;
let currentUserId;
let currentPlayerIndex;

async function init() {
    tg.expand();

    if (token) {
        try {
            await validateToken();
            initializeAuthenticatedUser();
        } catch (error) {
            console.error('Token validation failed:', error);
            token = null;
            localStorage.removeItem('jwt_token');
            showAuthView();
        }
    } else {
        showAuthView();
    }

    window.onerror = handleGlobalError;
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    console.log('Initialization complete');
}

function initializeAuthenticatedUser() {
    showLobby();
    initializeSocket();
    
    tg.MainButton.setText('Create Room').show().onClick(() => {
        createRoom();
    });

    tg.onEvent('viewportChanged', fetchRooms);
    // tg.onEvent('mainButtonClicked', createRoom);
}

async function validateToken() {
    return fetch('/validate-token', {
        headers: { 'Authorization': `Bearer ${token}` }
    }).then(response => {
        if (!response.ok) {
            throw new Error('Token invalid');
        }
    });
}

async function authenticate() {
    try {
        const initData = tg.initData || '';
        const authData = {
            auth_date: Math.floor(Date.now() / 1000),
            id: tg.initDataUnsafe.user.id,
            hash: initData.split('&').find(param => param.startsWith('hash='))?.split('=')[1] || '',
        };
        const response = await fetch('/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Authentication failed');
        }

        const data = await response.json();
        token = data.token;
        user = data.user;
        localStorage.setItem('jwt_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        currentUserId = user._id;
        initializeAuthenticatedUser();
    } catch (error) {
        console.error('Authentication error:', error);
        showError(`Authentication failed: ${error.response?.data?.error || error.message}`);
    }
}

function showAuthView() {
    document.getElementById('auth-view').style.display = 'block';
    document.getElementById('lobby-view').style.display = 'none';
    document.getElementById('game-view').style.display = 'none';
}

function showLobby() {
    document.getElementById('auth-view').style.display = 'none';
    document.getElementById('lobby-view').style.display = 'block';
    document.getElementById('game-view').style.display = 'none';
    fetchRooms();
    startRoomRefresh();
}

function showGameView() {
    document.getElementById('auth-view').style.display = 'none';
    document.getElementById('lobby-view').style.display = 'none';
    document.getElementById('game-view').style.display = 'block';
    document.getElementById('room-info').style.display = 'block';
    tg.MainButton.hide();
    stopRoomRefresh();
}

function startRoomRefresh() {
    roomRefreshInterval = setInterval(fetchRooms, 30000); // Refresh every 30 seconds
}

function stopRoomRefresh() {
    clearInterval(roomRefreshInterval);
}

async function fetchRooms() {
    try {
        const response = await fetch('/rooms', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('Failed to fetch rooms');
        const rooms = await response.json();
        displayRooms(rooms);
    } catch (error) {
        console.error('Error fetching rooms:', error);
        showError(`Failed to fetch rooms: ${error.message}`);
    }
}

function displayRooms(rooms) {
    const roomList = document.getElementById('room-list');
    roomList.innerHTML = '';
    rooms.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.className = 'room-card';
        roomElement.innerHTML = `
            <div class="room-name">${room.name}</div>
            <div class="room-info">
                Players: ${room.players.length}/4<br>
                Status: ${room.players.length >= 4 ? 'Full' : 'Open'}
            </div>
            <button class="join-button" ${room.players.length >= 4 ? 'disabled' : ''} onclick="joinRoom('${room._id}', '${room.name}')">
                ${room.players.some(player => player.telegramId === tg.initDataUnsafe.user.id) ? 'Rejoin' : 'Join'}
            </button>
        `;
        roomList.appendChild(roomElement);
    });
}

async function createRoom() {
    console.log('Creating room...');
    const roomName = generateRandomRoomName();

    try {
        socket.emit('create-room', roomName, (response) => {
            if (response.error) {
                throw new Error(response.error);
            }
            joinRoom(response.roomId, response.roomName, response.players);
        });
    } catch (error) {
        console.error('Error creating room:', error);
        showError(`Failed to create room: ${error.message}`);
    }
}

function joinRoom(roomId, roomName, players) {
    socket.emit('join-room', roomId, (response) => {
        console.info('join-room response', response);
        if (response.error) {
            console.error('Error joining room:', response.error);
            showError(`Failed to join room: ${response.error}`);
        } else {
            showGameView();
            updateRoomInfo(roomId, roomName);
            initializeGameUI();
            tg.MainButton.setText('Leave Room').show().onClick(() => leaveRoom(roomId));
            
            // Update the game state
            if (response.gameState) {
                handleGameUpdate({gameState: response.gameState, room: {roomId, roomName, players}});
            }
        }
    });
}

function leaveRoom(roomId) {
    if (confirm('Are you sure you want to leave the game?')) {
        if (socket) {
            socket.emit('leave-room', roomId, (error) => {
                if (error) {
                    console.error('Error leaving room:', error);
                    showError(`Failed to leave room: ${error}`);
                } else {
                    showLobby();
                    tg.MainButton.setText('Create Room').show().onClick(createRoom);
                    // disconnectSocket();
                }
            });
        } else {
            showLobby();
            tg.MainButton.setText('Create Room').show().onClick(createRoom);
        }
    }
}

function initializeSocket() {
    if (socket && socket.connected) {
        console.log('Socket already connected, ID:', socket.id);
        return;
    }

    console.log('Initializing socket connection...');

    socket = io({
        auth: { token: token }
    });

    // Enable socket.io debug logging
    localStorage.debug = 'socket.io-client:socket'

    socket.on('connect', () => console.log('Connected to server'));
    socket.on('connect_error', (error) => {
        console.error('Connection error:', error);
        showError(`Failed to connect: ${error.message}`);
    });
    socket.on('game-start', (data) => {
        console.log('Received game-start event:', data);
        handleGameUpdate(data);
    });
    socket.on('cards-dealt', handleGameUpdate);
    socket.on('game-update', (data) => {
        console.log('Received game-update event:', data);
        handleGameUpdate(data);
    });
    socket.on('player-turn', (data) => {
        console.log('Received player-turn event:', data);
        // handlePlayerTurn(data);
    });
    socket.on('player-joined', (data) => {
        console.log('Received player-joined event:', data);
    });
    socket.on('error', handleError);

    // Add other socket event listeners as needed
}

function initializeGameUI() {
    const gameActions = document.getElementById('game-actions');
    gameActions.innerHTML = `
        <m42-button id="fold-btn">Fold</m42-button>
        <m42-button id="call-btn">Call</m42-button>
        <m42-button id="raise-btn">Raise</m42-button>
    `;
    document.getElementById('fold-btn').addEventListener('click', () => handleGameAction('fold'));
    document.getElementById('call-btn').addEventListener('click', () => handleGameAction('call'));
    document.getElementById('raise-btn').addEventListener('click', () => handleGameAction('raise'));

    // Add a player list to the game view
    const gameView = document.getElementById('game-view');
    const playerList = document.createElement('div');
    playerList.id = 'player-list';
    gameView.appendChild(playerList);
}

function handleGameAction(action) {
    console.log(`Player action: ${action}`);
    let amount;
    if (action === 'raise') {
        amount = prompt('Enter raise amount:');
        if (amount === null) return;
        amount = parseInt(amount);
    } else if (action == 'call') {
        amount = gameState.lastRaiseAmount - gameState.playerStates[gameState.currentPlayer].bet;
    }

    if (!validateGameAction(action, amount)) {
        showError('Invalid action');
        return;
    }
    socket.emit('game-action', { type: action, amount });
    playActionSound(action);
    disablePlayerActions();
}

function validateGameAction(action, amount) {
    console.log('validating game action', action, amount);
    if (!gameState) return false;
    const currentPlayer = gameState.playerStates[gameState.currentPlayer];
    if (currentPlayer.userId !== user._id) return false;

    switch (action) {
        case 'fold':
            return true;
        case 'call':
            return currentPlayer.chips >= (gameState.lastRaiseAmount - currentPlayer.bet);
        case 'raise':
            return amount && amount > gameState.lastRaiseAmount && amount <= currentPlayer.chips;
        default:
            return false;
    }
}

function handleGameUpdate(data) {
    console.log('Game update:', data);
    gameState = data.gameState;
    const room = data.room;
    updateGameUI(gameState, room);
    if (data.message === 'New game started') {
        playActionSound('win');
        updateRoomInfo(gameState.roomId, gameState.roomName);
    }
}

function updateGameUI(gameState, room) {
    if (!gameState) {
        console.error('Invalid game state');
        return;
    }

    console.log('Updating game UI', gameState);

    updateCommunityCards(gameState.communityCards);
    updatePlayers(room.players, gameState.playerStates, gameState.currentPlayer, gameState.dealerPosition);
    updatePotAndRound(gameState.pot, gameState.round);
    updateGameActions(gameState);

    // Update room info if it's not already set
    if (!document.getElementById('room-info').innerHTML) {
        updateRoomInfo(gameState.roomId, gameState.roomName);
    }
}

function updateCommunityCards(communityCards) {
    const communityCardsElement = document.getElementById('community-cards');
    if (communityCardsElement) {
        communityCardsElement.innerHTML = '';
        if (Array.isArray(communityCards)) {
            communityCards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card';
                cardElement.textContent = card;
                communityCardsElement.appendChild(cardElement);
            });
        }
    }
}

function updatePlayers(players, playerStates, currentPlayer, dealerPosition) {
    const playersElement = document.getElementById('players');
    if (playersElement && Array.isArray(playerStates)) {
        playersElement.innerHTML = '';
        const playerCount = playerStates.length;
        const positions = ['BTN', 'SB', 'BB', 'UTG'];
        playerStates.forEach((playerState, index) => {
            const player = players.find(p => p._id === playerState.userId);
            if (player && player._id) {
                const playerElement = document.createElement('div');
                playerElement.className = `player ${currentPlayer === index ? 'active' : ''}`;
                const angle = ((index - dealerPosition + playerCount) % playerCount) * (Math.PI / 2);
                const radius = Math.min(playersElement.offsetWidth, playersElement.offsetHeight) * 0.4;
                const left = 50 + Math.cos(angle) * 40;
                const top = 50 + Math.sin(angle) * 40;
                playerElement.style.left = `${left}%`;
                playerElement.style.top = `${top}%`;
                playerElement.innerHTML = `
                    <div class="player-position">${positions[(index - dealerPosition + playerCount) % playerCount]}</div>
                    <div>${player.username || 'Unknown'} ${player.isAI ? '(AI)' : ''}</div>
                    <div class="player-cards">
                        ${player._id === user._id && Array.isArray(playerState.hand) ? playerState.hand.map(card => `<div class="card">${card}</div>`).join('') : '<div class="card back"></div><div class="card back"></div>'}
                    </div>
                    <div class="player-chips">${playerState.chips || 0}</div>
                `;
                playersElement.appendChild(playerElement);
            }
        });
    }
}

function updatePotAndRound(pot, round) {
    const potElement = document.getElementById('pot');
    if (potElement) {
        potElement.textContent = `Pot: $${pot || 0}`;
    }

    const roundElement = document.getElementById('round');
    if (roundElement) {
        roundElement.textContent = `Round: ${round || 'Unknown'}`;
    }
}

function updateGameActions(gameState) {
    const actionsElement = document.getElementById('game-actions');
    const isUserTurn = gameState.playerStates[gameState.currentPlayer].userId === user._id;

    if (isUserTurn) {
        actionsElement.innerHTML = `
            <button onclick="handleGameAction('fold')">Fold</button>
            <button onclick="handleGameAction('call')">Call</button>
            <button onclick="handleGameAction('raise')">Raise</button>
        `;
        enablePlayerActions();
    } else {
        actionsElement.innerHTML = '<p>Waiting for other players...</p>';
        disablePlayerActions();
    }
}

function handlePlayerTurn(data) {
    console.log('Player turn:', data);
    if (data.playerId === user._id) {
        enablePlayerActions();
    } else {
        disablePlayerActions();
    }
}

function handleError(error) {
    console.error('Game error:', error);
    showError(error);
}

function enablePlayerActions() {
    console.info('enabling player actions');
    const buttons = document.querySelectorAll('#game-actions button');
    buttons.forEach(button => button.disabled = false);
}

function disablePlayerActions() {
    const buttons = document.querySelectorAll('#game-actions button');
    buttons.forEach(button => button.disabled = true);
}

function handleGlobalError(message, source, lineno, colno, error) {
    console.error('Global error:', { message, source, lineno, colno, error });
    showError(`An unexpected error occurred: ${message}`);
    return true;
}

function handleUnhandledRejection(event) {
    console.error('Unhandled promise rejection:', event.reason);
    showError(`An unexpected error occurred: ${event.reason}`);
}

function showError(message, duration = 5000) {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    if (duration > 0) {
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, duration);
    }
}

document.addEventListener('DOMContentLoaded', init);

function generateRandomRoomName() {
    const adjectives = ['Cool', 'Awesome', 'Epic', 'Fantastic', 'Amazing', 'Stellar', 'Supreme', 'Ultimate'];
    const nouns = ['Poker', 'Cards', 'Game', 'Table', 'Room', 'Arena', 'Match', 'Tournament'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${randomAdjective} ${randomNoun} ${randomNumber}`;
}

function updateRoomInfo(roomId, roomName) {
    const roomInfo = document.getElementById('room-info');
    roomInfo.innerHTML = `
        <h2>Room: ${roomName || 'Unknown'}</h2>
        <p>Room ID: ${roomId || 'Unknown'}</p>
    `;
    roomInfo.style.display = 'block';
}

function playActionSound(action) {
    const soundElement = document.getElementById(`${action}-sound`);
    if (soundElement) {
        soundElement.play();
    }
}