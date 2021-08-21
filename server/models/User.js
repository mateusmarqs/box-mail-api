const mongoose = require('../../config/database')

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
        
    },
        
    createdAdt: {
        type: Date,
        default: Date.now
    }
})

const Users = mongoose.model('Users', UserModel)

module.exports = Users