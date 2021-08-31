const mongoose = require('mongoose')

mongoose.connect('mongodb://db:27017/boxmail', { useNewUrlParser: true, useUnifiedTopology: true})

module.exports = mongoose