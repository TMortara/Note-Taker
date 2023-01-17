// Require dependencies
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const notes = require('./notes');

// Create express application
const app = express();

// Middleware
app.use('/notes', notes);

module.exports = app;