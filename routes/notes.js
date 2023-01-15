const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET route retrieving all notes
notes.get('/', (req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

notes.post('/', (req, res) => {
    // Deconstructing items in req.body
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

    const notesData = readAndAppend(newNote, './db/db.json')
    res.json(notesData)
    }
    else {
        res.json('Error posting new note')
    }
})

notes.delete('/:id', (req, res) => {
    const { id } = req.params;

    const deletedNote = notes.propfind()
})

module.exports = notes;


