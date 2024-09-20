// Path And Import
const axios = require('axios');
const Movie = require('../models/Movie');

// API url
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Get All Movies
exports.getAllMovies = async () => {
    const movies = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
        params: {
            api_key: process.env.TMDB_API_KEY,
        },
    });

    const localMovies = await Movie.find();

    return [...localMovies, ...movies.data.results];
};

// Get Movie Overwiev By ID
exports.getMovieByID = async id => {
    console.log(id);
    const movie = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
        params: {
            api_key: process.env.TMDB_API_KEY,
        },
    });
    console.log(movie.data.overview);

    if (movie) {
        return { data: movie.data.overview };
    };

    const localMovie = await Movie.findOne({ _id: id });

    if (localMovie) {
        return { data: localMovie.overview };
    };

    return { message: '404 Not Found' };
};

// Search Movie
exports.searchMovie = async query => {
    const movie = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
        params: {
            api_key: process.env.TMDB_API_KEY,
            query: query,
        },
    });

    return movie.data.results;
};

// Add New Movie
exports.addMovie = async movie => {
    const newMovie = new Movie({
        adult: movie.adult,
        backdrop_path: movie.backdrop_path,
        genre_ids: movie.genre_ids,  // Expecting an array
        original_language: movie.original_language,
        original_title: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        title: movie.title,
        video: movie.video,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count
    });

    await newMovie.save();
    return newMovie;
};

// Edit Movie
exports.editMovie = async (id, movie) => {
    const updatedMovie = await Movie.findByIdAndUpdate(id, movie, { new: true });
    return updatedMovie;
};

// Delete Movie
exports.deleteMovie = async id => {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    return deletedMovie;
};