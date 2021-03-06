const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({
    username: {
        type: String, 
        unique: true, 
        required: true
    },
    email: {
        type: String, 
        unique: true, 
        required: true
    },
    password: String
})

var User = mongoose.model('User', userSchema)

module.exports = User