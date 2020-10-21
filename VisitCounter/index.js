const express = require("express")
const app = express()
const session = require('express-session')
const ejs = require('ejs')
app.use(session({
    secret: 'Bangarang',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 45000 }
}))

app.use(express.static(__dirname+'/static'))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));




app.get('/', (request, response) => {
    if(!request.session.counter)
    request.session.counter = 0
    request.session.counter++
    console.log(request.session.counter)
    console.log(request.session)
    response.render('index.ejs', {numOfViews: request.session.counter})
});

app.get('/two', (request, response) => {
    if(!request.session.counter)
    request.session.counter = 0
    request.session.counter+= 2
    console.log(request.session.counter)
    console.log(request.session)
    response.render('index.ejs', {numOfViews: request.session.counter})
});

app.get('/reset', (request, response) => {
    request.session.counter = 0
    console.log(request.session.counter)
    console.log(request.session)
    response.render('index.ejs', {numOfViews: request.session.counter})
})


app.listen(8000, () => console.log("listening on port 8000"));