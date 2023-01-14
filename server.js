const express = require('express');
const path = require('path');

const app = express();
//first checks if PORT is in an environment variable, if not run on 3301
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set public file to be static
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

//runs the webserver
app.listen(PORT, () =>
//callback that lets you know server is running
console.log(`Listening at: http://localhost:${PORT}`)
);
