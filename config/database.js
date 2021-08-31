const mongoose = require('mongoose')

const MONGO_URI = "mongodb://db:27017/boxmail"

// mongoose.connect('mongodb://db:27017/boxmail', { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})

module.exports = mongoose