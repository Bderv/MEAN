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
    response.render('index.ejs')
})

app.post('/add_results', (request, response) => {
    request.session.body = request.body
    console.log(request.body)
    response.redirect('/result')
})

app.get('/result', (request, response) => {
    console.log(request.session.body)
    response.render('results.ejs', {results: request.session.body})
})

app.listen(8000, () => console.log("listening on port 8000"));