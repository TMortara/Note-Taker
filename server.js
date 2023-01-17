// Requiring dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/index');

// Port
const PORT = process.env.PORT || 3001;

// Create express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Set static page
app.use(express.static('public'));

// Route to the main HTML page
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

// Route to the notes HTML page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Fallback if no routes found
app.get('*', (req, res) => res.redirect('/'));

//runs the webserver
app.listen(PORT, () =>
// callback that lets you know server is running
console.log(`Listening at: http://localhost:${PORT}`)
);
