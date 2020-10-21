const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    name: {type: String, required:true, minlength:3},
    type: {type: String, required:true, minlength:3},
    description: {type: String, required:true, minlength:3},
    skilla: {type: String, required:false},
    skillb: {type: String, required:false},
    skillc: {type: String, required:false},
}, {timestamps: true});

const Pet = new mongoose.model('Pet',PetSchema)

module.exports={
    Pet:Pet,
    PetSchema:PetSchema,
}