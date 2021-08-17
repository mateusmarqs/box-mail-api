const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },

    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },

    password: {
        type: String, 
        require: true,
        select: false
    },

    createdAdt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User