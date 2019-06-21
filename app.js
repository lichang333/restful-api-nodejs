const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const cors = require('cors'); //disable cors on codepen

require('dotenv/config');

// //middlewares
// app.use('/posts', () => {
//     console.log("middlewares running...");
// });

app.use(bodyParser.json());
// app.use(cors());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//routes
app.get('/',(req,res) => {
    res.send('We are on home');
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
    console.log('connected to DB!')
);

//listening to the server
app.listen(9000);
