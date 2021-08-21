const express = require('express')
const router = express.Router()

const Users = require('../models/User')

router.post('/register', async (req, res) => {
    try {
        const user = await Users.create(req.body)
        return res.send({ user })
    } catch(err) {
        return res.status(400).send({ error: 'Registration failed' })
    }
})

module.exports = router