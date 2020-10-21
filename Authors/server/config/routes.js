const authors = require('../controllers/authors')
const { create } = require('../controllers/authors');
const { Author } = require('../models/model');

module.exports = function(app){


app.get('/',(req,res)=>{
    // LEAVE blank
})

app.get('/authors',(req,res)=>{
    authors.index(req,res)
})

app.post("/authors", (req, res) => { 
    authors.create(req,res)
})

app.get('/authors/:id', (req,res)=>{
    authors.authorid(req,res)
})

app.put('/authors/:id', (req,res)=>{
    authors.edit(req,res)
})

app.delete('/authors/:id', (req,res)=>{
    authors.delete(req,res)
})

}