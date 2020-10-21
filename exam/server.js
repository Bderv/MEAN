const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public/dist/public'))
app.use(express.json())
const { response } = require('express')
const session = require('express-session')
app.use(session({
    secret: 'Lets try and learn some more',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 55000 }
}))
app.set('views', __dirname + '/views')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Exam', {useNewUrlParser: true})
const { json } = require('body-parser')
require('./server/config/routes')(app)


app.listen(8000, () => console.log("server is up and listening to port 8000"))