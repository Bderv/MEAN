const {User} = require('../models/quote')

module.exports = {
    index:(req,res)=>{
        User.find()
            .then(data => res.render('index', {users: data}))
            .catch(err => res.json(err));
    },

    form:(req,res)=>{
        const user = new User();
        user.name = req.body.name;
        user.quote = req.body.quote;
        console.log(req.body.name);
        console.log(req.body.quote);
        user.save()
            .then(newUserData => console.log('user created: ', newUserData))
            .catch(err => console.log(err));
        res.redirect('/quotes');
    },

    quoting:(req,res)=>{
        User.find()
            .then(data => {
                console.log(data)
                res.render("quotes", {users: data})
            })
            .catch(err => res.json(err))
    },
}