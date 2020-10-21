const {Pet} = require('../models/model')

module.exports = {
    index:(req,res)=>{
        Pet.find()
    .then(pets => res.json(pets))
    .catch(err => res.json(err));
    },

    create:(req,res)=>{
        const pet = new Pet();
        pet.name = req.body.name;
        pet.type = req.body.type;
        pet.description = req.body.description;
        pet.skilla = req.body.skilla;
        pet.skillb = req.body.skillb;
        pet.skillc = req.body.skillc;
        console.log(req.body.name);
        console.log(req.body.type);
        console.log(req.body.description);
        console.log(req.body.skilla);
        console.log(req.body.skillb);
        console.log(req.body.skillc);
        pet.save()
            .then(newPetData=> {
                console.log('pet created: ', newPetData)
                res.json(newPetData)
            })
            .catch(err => console.log(err));
    },

    petid:(req,res)=>{
        Pet.findOne({_id: req.params.id})
        .then(data=>{
            console.log(data)
            res.json(data)
        })
        .catch(err => res.json(err))
    },

    edit:(req,res)=>{
        Pet.findOne({_id: req.params.id})
        .then(pet =>{
            pet.name = req.body.name;
            pet.type = req.body.type;
            pet.description = req.body.description;
            pet.skilla = req.body.skilla;
            pet.skillb = req.body.skillb;
            pet.skillc = req.body.skillc;
            console.log(req.body.name)
            console.log(req.body.type);
            console.log(req.body.description);
            console.log(req.body.skilla);
            console.log(req.body.skillb);
            console.log(req.body.skillc);
            pet.save()
            .then(updatedPet => {
                res.json(updatedPet);
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    },

    delete:(req,res)=>{
        Pet.remove({_id: req.params.id})
        .then(deletedPet =>{
            console.log('pet deleted', deletedPet)
            res.json(deletedPet)
        })
        .catch(err => res.json(err))
    },
}