// Path 
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Dotenv Config 
dotenv.config();

// Connect
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database Connected Succesfully');
    } catch (error) {
        throw error;
    };
};

module.exports = connect;