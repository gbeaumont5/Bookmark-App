const express = require('express');
const websites = express.Router();
const Websites = require('../models/websites')

//INDEX
websites.get('/', (req, res) => {
    Websites.find({}, (err, foundWebsites) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(foundWebsites)
    })
})



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
// websites.delete('/:id', (req, res) => {
//     Websites.findByIdAndRemove(req.params.id, (err, deletedWebsites) => {
//         if (err) {
//             res.status(400).json({error: err.message})
//         }
//         res.status(200).json(deletedWebsites)
//     })
// })


//Update
// websites.put('/:id', (req, res) => {
//     Websites.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedWebsites) => {
//         if (err) {
//             res.status(400).json({error: err.message})
//         }
//         res.status(200).json(updatedWebsites)
//     })
// })




module.exports = websites;