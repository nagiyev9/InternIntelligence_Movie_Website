// Path
const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

// Dotenv Config
dotenv.config();

// App 
const app = express();

// Port 
const PORT = process.env.PORT || 4242;

// Imports
const connect = require('./database/db');
const MainRouter = require('./router');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());

// Main Router
app.use('/api', MainRouter);

// App Listen
app.listen(PORT, () => {
    connect();
    console.log(`Server is working on ${PORT} port`);
});