const express = require('express');
const websites = express.Router();
const Websites = require('../models/websites');

//INDEXXXX
websites.get('/', (req, res) => {
  res.send('Hello World');
});



//Create
websites.post('/', (req, res) => {
  Websites.create(req.body, (error, createdWebsite) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdWebsite);
  });
});

//Delete

//Update

module.exports = websites;
