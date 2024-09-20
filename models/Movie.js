const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    adult: {
        type: Boolean,
        required: true,
    },
    backdrop_path: {
        type: String,
        required: false,
    },
    genre_ids: {
        type: [Number],
        required: true,
    },
    original_language: {
        type: String,
        required: true,
    },
    original_title: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    popularity: {
        type: Number,
        required: true,
    },
    poster_path: {
        type: String,
        required: false,
    },
    release_date: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    video: {
        type: Boolean,
        required: true,
    },
    vote_average: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
    },
    vote_count: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
