// Path
const express = require('express');

// Router
const router = express.Router();

// Imports
const movieRouter = require('./movie');
const authRouter = require('./auth');

// Movie
router.use('/movie', movieRouter);

// Auth
router.use('/auth', authRouter);

module.exports = router;