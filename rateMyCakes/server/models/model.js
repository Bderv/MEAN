const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    rating: {type: Number, required:false},
    comment: {type: String, required:true, minlength:3},
}, {timestamps: true});

const CakeSchema = new mongoose.Schema({
    baker: {type: String, minlength:3},
    imgtag: {type: String, minlength:3},
    reviews: [ReviewSchema],
}, {timestamps: true});

const Review = new mongoose.model('Review', ReviewSchema);
const Cake = new mongoose.model('Cake',CakeSchema)

module.exports={
    Cake:Cake,
    CakeSchema:CakeSchema,
    ReviewSchema:ReviewSchema,
    Review:Review,
}