//IMPORTS
const express = require('express');
const mongoose = require('./database/mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//MIDDLEWARE

//app.use(bodyParser.json());
app.use(express.json());

const personsRoute = require('./routes/persons');

app.use('/persons', personsRoute);

//PORT LISTENER
app.listen(3000, () => console.log("Server connected on port 3000!"));