

module.exports = {
    index:(req,res)=>{
        TMNT.find()
            .then(data => {
                console.log(data)
                res.render("index", {turtles: data})
            })
            .catch(err => res.json(err))
    },

    create:(req,res)=>{
        const turtle = new TMNT();
        turtle.name = req.body.name;
        turtle.favColor = req.body.favColor;
        turtle.weapon = req.body.weapon;
        turtle.interests = req.body.interests;
        console.log(req.body.name);
        console.log(req.body.favColor);
        console.log(req.body.weapon);
        console.log(req.body.interests);
        turtle.save()
            .then(newTMNTData => console.log('turtle created: ', newTMNTData))
            .catch(err => console.log(err));
        res.redirect('/');
    },

    edit:(req,res)=>{
        TMNT.findOne({_id: req.params.id})
        .then(data => {
            console.log(data)
            res.render("editform", {turtle: data})
        })
        .catch(err => res.json(err))
    },

    turtleid:(req,res)=>{
        TMNT.findOne({_id: req.params.id})
        .then(data => {
            console.log(data)
            res.render("info", {turtle: data})
        })
        .catch(err => res.json(err))
    },

    updateturtle:(req,res)=>{
        TMNT.updateOne({_id: req.params.id})
        .then(turtle => {
            turtle.name = req.body.name;
            turtle.favColor = req.body.favColor;
            turtle.weapon = req.body.weapon;
            turtle.interests = req.body.interests;
            console.log(req.body.name);
            console.log(req.body.favColor);
            console.log(req.body.weapon);
            console.log(req.body.interests);
            return turtle.save()
        })
                .then(newTMNTData => console.log('turtle created: ', newTMNTData))
                .catch(err => console.log(err));
            res.redirect('/');
    },

    destroyturtle:(req,res)=>{
        TMNT.remove({_id: req.params.id})
        .then(deletedTurtle =>{
            res.redirect('index')
        })
        .catch(err => res.json(err))
    }
}