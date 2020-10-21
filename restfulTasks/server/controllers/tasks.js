const {Task} = require('../models/model')

module.exports = {
    index:(req,res)=>{
        Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err));
    },

    create:(req,res)=>{
        const task = new Task();
        task.title = req.body.title;
        task.description = req.body.description;
        console.log(req.body.title);
        console.log(req.body.description);
        task.save()
            .then(newTaskData=> {
                console.log('task created: ', newTaskData)
                res.json(newTaskData)
            })
            .catch(err => console.log(err));
    },

    taskid:(req,res)=>{
        Task.findOne({_id: req.params.id})
        .then(data=>{
            console.log(data)
            res.json(data)
        })
        .catch(err => res.json(err))
    },

    edit:(req,res)=>{
        Task.updateOne({_id: req.params.id})
        .then(task =>{
            task.title = req.body.title;
            task.description = req.body.description;
            console.log(req.body.title)
            console.log(req.body.description)
            res.json(task);
            return task.save()
        })
            .catch(err => console.log(err))
    },

    delete:(req,res)=>{
        Task.remove({_id: req.params.id})
        .then(deletedTask =>{
            console.log('task deleted', deletedTask)
            res.json(deletedTask)
        })
        .catch(err => res.json(err))
    },
}