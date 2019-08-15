//dependenices 

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})



//listener
app.listen(3000, () => {
    console.log('listening')
});