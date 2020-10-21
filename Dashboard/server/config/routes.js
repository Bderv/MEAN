const turtles = require('../controllers/turtles')
const { create } = require('../controllers/turtles')

module.exports = function(app){
    
    app.get('/', (req, res)=>{
        turtles.index(req,res)
    })

    app.post('/TMNT', (req, res)=>{
        turtles.create(req,res)
    })
    
    app.get('/TMNT/new', (req, res)=>{
        res.render('form')
    })
    
    app.get('/TMNT/edit/:id', (req, res)=>{
        turtles.edit(req,res)
    })
    
    app.get('/TMNT/:id', (req, res)=>{
        turtles.turtleid(req,res)
    })
    
    app.post('/TMNTupdate', (req, res)=>{
        turtles.updateturtle(req,res)
        })
    
    
    app.post('/destroy', (req, res)=>{
        turtles.destroyturtle(req,res)
    })
    
}