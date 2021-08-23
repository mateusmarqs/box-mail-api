// const mongoose = require('mongoose')
const mongoose = require('../../config/database') 

const UserModel = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    createdAdt: {
        type: Date,
        default: Date.now
    }
})

const Users = mongoose.model('users', UserModel)

module.exports = Users

// const mongoose = require('../../config/database')

// const UserModel = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     createdAdt: {
//         type: Date,
//         default: Date.now
//     }
// })

// const Users = mongoose.model('users', UserModel)

// module.exports = Users