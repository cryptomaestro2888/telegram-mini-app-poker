# Poker Mini App

A real-time multiplayer poker game built as a Telegram Mini App using Node.js, Express, Socket.IO, and MongoDB.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Setup and Installation](#setup-and-installation)
6. [How to Run](#how-to-run)
7. [API Endpoints](#api-endpoints)
8. [Socket Events](#socket-events)
9. [Game Logic](#game-logic)
10. [Frontend Components](#frontend-components)
11. [Database Schema](#database-schema)
12. [Authentication](#authentication)
13. [Deployment](#deployment)
14. [Future Enhancements](#future-enhancements)

## Project Overview

This Poker Mini App is designed to be integrated with Telegram, allowing users to play poker with friends or AI opponents directly within the Telegram app. The game supports real-time multiplayer functionality, user authentication via Telegram, and persistent game states.

## Features

- User authentication via Telegram
- Create and join game rooms
- Real-time multiplayer poker gameplay
- AI opponents
- In-game chat (planned feature)
- Multiple poker variants (planned feature)

## Tech Stack

- Backend: Node.js, Express
- Frontend: HTML, CSS, JavaScript
- Real-time Communication: Socket.IO
- Database: MongoDB with Mongoose
- Authentication: JWT, Telegram Bot API
- Other Libraries: Joi (validation), bcrypt (password hashing)

## Project Structure

```
poker-mini-app/
├── public/
│   ├── index.html
│   ├── app.js
│   └── GameComponent.js
├── server/
│   ├── index.js
│   ├── gameLogic.js
│   ├── pokerLogic.js
│   ├── logger.js
│   └── models.js
├── .env
├── package.json
└── README.md
```

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in a `.env` file:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   ```
4. Ensure MongoDB is running on your system or use a cloud-hosted solution

## How to Run

1. Start the server: `npm start`
2. Access the app through your Telegram Mini App or via `http://localhost:3000` for local development

## API Endpoints

- POST `/auth`: Authenticate user with Telegram data
- GET `/rooms`: Fetch available game rooms
- POST `/rooms`: Create a new game room
- GET `/validate-token`: Validate JWT token

## Socket Events

- `join-room`: Join a game room
- `leave-room`: Leave a game room
- `game-action`: Perform a game action (fold, call, raise)
- `game-start`: Start a new game
- `game-update`: Receive game state updates
- `player-turn`: Notify player of their turn

## Game Logic

The core game logic is implemented in `server/gameLogic.js` and `server/pokerLogic.js`. These files handle:

- Game state initialization
- Turn management
- Card dealing
- Hand evaluation
- Betting rounds
- Determining winners

## Frontend Components

The frontend is built with vanilla JavaScript and consists of three main views:

1. Authentication View
2. Lobby View
3. Game View

The `app.js` file contains the main frontend logic, handling user interactions, socket communications, and UI updates.

## Database Schema

The project uses two main MongoDB models:

1. User Model:
   - telegramId
   - username
   - isAI

2. Room Model:
   - name
   - players
   - gameState (including deck, community cards, player states, etc.)

## Authentication

Authentication is handled using Telegram's authentication mechanism. The server verifies the authentication data sent from the client using the Telegram Bot API secret token.

## Deployment

The app can be deployed to any Node.js hosting platform. Ensure that environment variables are properly set in the production environment.

## Future Enhancements

- Implement in-game chat functionality
- Add support for different poker variants (e.g., Omaha, Seven-Card Stud)
- Enhance AI opponent logic
- Implement a ranking system
- Add animations and sound effects to improve user experience

For more detailed information about specific components or functionalities, please refer to the inline comments in the respective files.