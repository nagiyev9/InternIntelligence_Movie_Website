# Movie Website Project

This is a Node.js and Express.js-based movie website project that allows users to add, update, delete, and search for movies using the TMDB API. It includes features such as password validation, rate limiting, and JWT-based token authentication.

## Features
- Add, update, and delete movies
- Search movies via TMDB API
- Password validation
- Rate limiting to prevent abuse
- JWT-based token authentication (access and refresh tokens)
- Environment variables for secure configurations

## Prerequisites

Before you can start the project, ensure that you have the following installed:

```bash
# Install Node.js (v14 or later)
https://nodejs.org/en/download/

# MongoDB
https://www.mongodb.com/
```

## Installation
```bash
# 1. Clone the repository to your local machine:
git clone https://github.com/your-username/your-repo-name.git

# 2. Navigate to the project directory:
cd your-repo-name

# 3. Install the dependencies for both the frontend and backend:
npm install
```

## Configuration
Make sure you have a `.env` file in your backend directory with the following environment variables:
```bash
# .env file
MONGO_URI=your_mongo_db_uri
TMDB_API_KEY=your_tmdb_api_key
JWT_SECRET_KEY=your_jwt_secret_key
JWT_REFRESH_SECRET_KEY=your_jwt_refresh_secret_key
```

## Running the Project
To start the project, follow these steps:
```bash
# 1. Start both the backend and frontend:
npm start

# 2. The backend server will run at http://localhost:4242 (or whichever port you have set in your environment configuration).
```

## API Endpoints
Movie Routes
```bash
# Get all movies (both local and from TMDB)
GET /api/movie/all

# Get movie by ID
GET /api/movie/:id

# Search for movies using the TMDB API (?search=movie_name)
GET /api/movie/search-movie

# Add a new movie
POST /api/movie/add

# Update a movie by ID
PUT /api/movie/:id

# Delete a movie by ID
DELETE /api/movie/:id
```

## Authentication Routes
```bash
# Login and receive an access token
POST /api/auth/login

# Register a new user
POST /api/auth/signup

# Refresh access token using refresh token
POST /api/auth/refresh-token
```

## Middleware
- Rate Limiting: Uses `express-rate-limit` to limit requests and prevent abuse.
- JWT Authentication: Secured routes using JWT tokens.
- Password Validation: Passwords are validated and hashed using `bcrypt`.

## Dependencies
The project uses the following dependencies:
```bash
"dependencies": {
    "axios": "^1.7.7",
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.0",
    "express-rate-limit": "^7.4.0",
    "express-validator": "^7.2.0",
    "helmet": "^7.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.9.0",
    "mongoose": "^8.6.3",
    "morgan": "^1.10.0"
  }
```

## Contributing
Feel free to fork this project, submit issues, or contribute by sending pull requests.

## License
This project is licensed under the MIT License.
