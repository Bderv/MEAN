const mongoose = require('mongoose')

const TMNTSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3},
    favColor: { type: String, required: true, minlength: 3},
    weapon: { type: String, required: true, minlength: 3},
    interests: { type: String, required: true, minlength: 2},
}, {timestamps: true});

const TMNT = new mongoose.model('TMNT', TMNTSchema)

module.exports={
    TMNT:TMNT,
    TMNTSchema:TMNTSchema,
}