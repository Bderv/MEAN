const {Cake, Review} = require('../models/model')

module.exports = {
    index:(req,res)=>{
        Cake.find()
    .then(cakes => res.json(cakes))
    .catch(err => res.json(err));
    },

    create:(req,res)=>{
        const cake = new Cake();
        cake.baker = req.body.baker;
        cake.imgtag = req.body.imgtag;
        console.log(req.body.baker);
        console.log(req.body.imgtag);
        cake.save()
            .then(newCakeData=> {
                console.log('cake created: ', newCakeData)
                res.json(newCakeData)
            })
            .catch(err => console.log(err));
    },

    createReview:(req,res)=>{
        console.log('here is the bod', req.body)
        const review = new Review()
        review.rating = req.body.rating
        review.comment = req.body.comment
        review.save()
        .then(reviewData => {
            console.log('review created', reviewData)
            Cake.findOne({_id: req.params.id})
            .then(cakeData => {
                console.log('cake gets review', cakeData)
                cakeData.reviews.push(reviewData)
                cakeData.save()
                .then(reviewCakeData => {
                    console.log('review nesting complete!', reviewCakeData)
                    res.json(reviewCakeData)
                })
                .catch(err => {
                    console.log('Error when creating review', err)
                    res.json(err)
                })
            })
            .catch(err => {
                console.log('Error when pushing review', err)
                res.json(err)
            })
        })
        .catch(err => {
            console.log('Error when nesting and saving review', err)
            res.json(err)
        })
    },

    cakeId:(req,res)=>{
        Cake.findOne({_id: req.params.id})
        .then(data=>{
            console.log(data)
            res.json(data)
        })
        .catch(err => res.json(err))
    },

    edit:(req,res)=>{
        Cake.updateOne({_id: req.params.id})
        .then(cake =>{
            cake.baker = req.body.baker;
            cake.imgtag = req.body.imgtag;
            console.log(req.body.baker)
            console.log(req.body.imgtag)
            res.json(cake);
            return cake.save()
        })
            .catch(err => console.log(err))
    },

    delete:(req,res)=>{
        Cake.remove({_id: req.params.id})
        .then(deletedCake =>{
            console.log('cake deleted', deletedCake)
            res.json(deletedCake)
        })
        .catch(err => res.json(err))
    },
}