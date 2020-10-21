const users = require('../controllers/dojos')
const { create } = require('../controllers/dojos')


module.exports = function(app){
    app.get('/', (req, res) => {
        users.index(req,res)
    })

    app.post('/quoteForm', (req, res)=>{
        users.form(req,res)
    }),
    
    app.get('/quotes', (req, res)=>{
        users.quoting(req,res)
    })
}