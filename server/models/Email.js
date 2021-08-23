// const mongoose = require('mongoose')
const mongoose = require('../../config/database') 

const EmailModel = new mongoose.Schema({
    title: String,
    contents: String,
    sender: String,
    recipient: String,
    createdAdt: {
        type: Date,
        default: Date.now
    }
})

const Email = mongoose.model('emails', EmailModel)

module.exports = Email