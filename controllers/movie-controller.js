// Path And Import
const movieService = require('../services/movie-service');

// Get All Movies
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();
        res.status(200).json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching data from TMDB');
    };
};

// Get Movie Overwiev By ID
exports.getMovieByID = async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await movieService.getMovieByID(id);
        res.status(200).json(movie);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching data');
    };
};

// Search Movie
exports.searchMovie = async (req, res) => {
    const query = req.query.search;
    console.log(query);
    try {
        const movie = await movieService.searchMovie(query);
        res.status(200).json(movie);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching data');
    };
};

// Add New Movie
exports.addMovie = async (req, res) => {
    const movie = req.body
    try {
        const newMovie = await movieService.addMovie(movie);
        res.status(201).json({ message: 'Movie Added Successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error while adding data');
    };
};

// Edit Movie
exports.editMovie = async (req, res) => {
    const id = req.params.id;
    const movie = req.body;
    try {
        const updatedMovie = await movieService.editMovie(id, movie);
        res.status(200).json({
            message: 'Movie Edited Successfully',
            data: updatedMovie
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error while editing data');
    };
};

// Delete Movie
exports.deleteMovie = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedMovie = await movieService.deleteMovie(id);
        res.status(200).json({
            message: 'Movie Deleted Successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error while deleting data');
    };
};