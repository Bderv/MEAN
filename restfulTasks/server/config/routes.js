const tasks = require('../controllers/tasks')
const { create } = require('../controllers/tasks');
const { Task } = require('../models/model');

module.exports = function(app){


app.get('/',(req,res)=>{
    // LEAVE blank
})

app.get('/tasks',(req,res)=>{
    tasks.index(req,res)
})

app.post("/tasks", (req, res) => { 
    tasks.create(req,res)
})

app.get('/tasks/:id', (req,res)=>{
    tasks.taskid(req,res)
})

app.put('/tasks/:id', (req,res)=>{
    tasks.edit(req,res)
})

app.delete('/tasks/:id', (req,res)=>{
    tasks.delete(req,res)
})

}