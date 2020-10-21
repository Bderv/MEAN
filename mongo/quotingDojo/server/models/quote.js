const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    quote: String,

})

const User = new mongoose.model('User', UserSchema);

module.exports={
    User:User,
    UserSchema:UserSchema,
}