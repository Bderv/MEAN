const {Author} = require('../models/model')

module.exports = {
    index:(req,res)=>{
        Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.json(err));
    },

    create:(req,res)=>{
        const author = new Author();
        author.name = req.body.name;
        console.log(req.body.name);
        author.save()
            .then(newAuthorData=> {
                console.log('author created: ', newAuthorData)
                res.json(newAuthorData)
            })
            .catch(err => console.log(err));
    },

    authorid:(req,res)=>{
        Author.findOne({_id: req.params.id})
        .then(data=>{
            console.log(data)
            res.json(data)
        })
        .catch(err => res.json(err))
    },

    edit:(req,res)=>{
        Author.findOne({_id: req.params.id})
        .then(author =>{
            author.name = req.body.name;
            console.log(req.body.name)
            author.save()
            .then(updatedAuthor => {
                res.json(updatedAuthor);
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    },

    delete:(req,res)=>{
        Author.remove({_id: req.params.id})
        .then(deletedAuthor =>{
            console.log('author deleted', deletedAuthor)
            res.json(deletedAuthor)
        })
        .catch(err => res.json(err))
    },
}