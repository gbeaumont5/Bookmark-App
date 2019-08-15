const express = require('express');
const websites = express.Router();
const Websites = require('../models/websites')

//index
websites.get('/', (req, res) => {
    res.send('Hello World')
})

//Create

//Delete


//Update



module.exports = websites;