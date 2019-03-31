const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/Logger');

const app = express();

// Init Middleware
//app.use(logger);

//Get ALL Members
app.get('/api/members', (req, res) => res.json(members));

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server Started on port ${PORT}`));