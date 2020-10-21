const pets = require('../controllers/pets')
const { create } = require('../controllers/pets');
const { Pet } = require('../models/model');

module.exports = function(app){


app.get('/',(req,res)=>{
    // LEAVE blank
})

app.get('/pets',(req,res)=>{
    pets.index(req,res)
})

app.post("/pets", (req, res) => { 
    pets.create(req,res)
})

app.get('/pets/:id', (req,res)=>{
    pets.petid(req,res)
})

app.put('/pets/:id/edit', (req,res)=>{
    pets.edit(req,res)
})

app.delete('/pets/:id', (req,res)=>{
    pets.delete(req,res)
})

}