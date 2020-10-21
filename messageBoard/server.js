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
mongoose.connect('mongodb://localhost/MessageBoard', {useNewUrlParser: true})

const flash = require('express-flash')
app.use(flash())

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(9001, ()=> console.log('server is up AND ITS OVER 9000'))