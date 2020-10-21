const cakes = require('../controllers/cakes')
const { create } = require('../controllers/cakes');
const { Cake } = require('../models/model');

module.exports = function(app){


app.get('/',(req,res)=>{
    // LEAVE blank
})

app.get('/cakes',(req,res)=>{
    cakes.index(req,res)
})

app.post("/cakes", (req, res) => { 
    cakes.create(req,res)
})

app.post('/review/:id',(req,res)=>{
    cakes.createReview(req,res)
})

app.get('/cakes/:id', (req,res)=>{
    cakes.cakeId(req,res)
})

app.put('/cakes/:id', (req,res)=>{
    cakes.edit(req,res)
})

app.delete('/cakes/:id', (req,res)=>{
    cakes.delete(req,res)
})

}