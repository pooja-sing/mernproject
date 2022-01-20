const dotenv =require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express();


dotenv.config({path:'./config.env'})
require('./db/conn');
const User = require("./models/userSchema");

app.use(express.json());

//const User = require('./models/userSchema')

app.use(require('./router/auth'));

//database

// mongodb+srv://pooja:<password>@cluster0.ckg2n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


//middelware
const middelware = (req, res, next) => {
    console.log(`hello my middelwre`);
    next();

}


app.get('/', (req, res) => {
    res.send('hello world from the server  app.js');
});

app.get('/about', middelware, (req, res) => {
    res.send('hello world from the about server');
});


app.get('/contact', (req, res) => {
    res.send('hello world from the contact server');
});


app.get('/signin', (req, res) => {
    res.send('hello world from the  signin server');


});


app.get('/signup', (req, res) => {
    res.send('hello world from the signup server');


});
app.listen(3000, () => {
    console.log('server is running at port no 3000')
})