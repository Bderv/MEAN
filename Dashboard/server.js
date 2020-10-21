const express = require('express')
const app = express()
app.use(express.static(__dirname+'/static'))
app.use(express.urlencoded({extended: true}))
const { response } = require('express')
const session = require('express-session')
app.use(session({
    secret: 'Lets try and learn some more',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 55000 }
}))
const ejs = require('ejs')
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Dashboard', {useNewUrlParser: true})
const flash = require('express-flash')
app.use(flash())
require('./server/config/routes')(app)
app.listen(1990, () => console.log("server is up and listening to port 1990"))