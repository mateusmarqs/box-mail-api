const express = require('express')

module.exports = () => {
    const app = express()

    app.set('view engine', 'ejs')

    app.use(express.urlencoded ({
        extended: false
    }))
    
    app.use(express.json())

    return app
}

