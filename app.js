const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// routes
const homeRoute = require('./routes/home.route');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(homeRoute);

app.listen(3000, function(){
    console.log('Srver running on port 3000');
    mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true } , function(){
        console.log('Connected to Mongo Database');
    });
});
