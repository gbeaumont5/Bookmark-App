const express = require('express');
const websites = express.Router();
const Websites = require('../models/websites')

//index
websites.get('/', (req, res) => {
    Websites.find({}, (err, foundWebsites) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(foundWebsites)
    })
})

//Create

//Delete



//Update



module.exports = websites;