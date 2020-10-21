const express = require("express")
const app = express()
app.use(express.static(__dirname+'/static'))
app.use(express.urlencoded({extended: true}));
const { response } = require("express");
const session = require('express-session')
app.use(session({
    secret: 'Lets try to learn',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 50000 },
}))
const ejs = require('ejs')
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/QuotingDojo', {useNewUrlParser: true});

require('.server/config/routes')(app)

app.listen(8000, () => console.log("server is up and listening on port 8000"));