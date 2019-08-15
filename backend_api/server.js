//dependenices 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const websitesController = require('./controllers/websites')
const PORT = 3000; 

//middleware
app.use(express.json());
app.use('/websites', websitesController)

//mongoose connections
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/websites', {useNewUrlParser: true})
mongoose.connection.once('open', () =>{
    console.log('connected to mongoose...')
})

//listener
app.listen(PORT, () => {
    console.log('listening')
});