const express = require('express');

const app = express();

//routes
app.get('/',(req,res) => {
    res.send('We are on home');
});


//listening to the server
app.listen(9000);