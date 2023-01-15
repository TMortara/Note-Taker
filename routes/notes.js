const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET route retrieving all notes
notes.get('/', (req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

notes.get('/api/notes', (req, res) => {
    return res.json(JSON.parse(fs.readFileSync('./db/db.json')))
});

notes.post('/', (req, res) => {
    // Deconstructing items in req.body
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            notes_id: uuidv4(),
        };

    readAndAppend(newNote, './db/db.json');

    const response = {
        status: 'Note posted successfully!',
        body: newNote,
    };

    res.json(response);
    }
    else {
        res.json('Error posting new note')
    }
})

router.delete('/:id', (req, res) => {
    // const deleteNote = 
})

module.exports = notes;


