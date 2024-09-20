// Path
const express = require('express');

// Router
const router = express.Router();

// Imports
const movieController = require('../controllers/movie-controller');
const authenticateToken = require('../middlewares/auth');

// GET
router.get('/all', movieController.getAllMovies); // All Movies
router.get('/search-movie', movieController.searchMovie); // Search Movie
router.get('/:id', movieController.getMovieByID); // Movie Overwiev By ID  NOTE: Only for TMDB API

// POST
router.post('/add', authenticateToken, movieController.addMovie);

// PUT
router.put('/edit/:id', authenticateToken, movieController.editMovie);

// DELETE
router.delete('/delete/:id', authenticateToken, movieController.deleteMovie);

module.exports = router;