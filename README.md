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