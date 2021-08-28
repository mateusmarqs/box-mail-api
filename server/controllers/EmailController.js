const express = require('express')
const router = express.Router()
const Email = require('../models/Email')
const User = require('../models/User')
const userAuth = require('../middlewares/userAuth')

router.post('/send', (req, res) => {
    const {title, contents, sender, recipient} = req.body

    User.findOne({ email: recipient })
        .then(user => {
            if (user) {
                const email = new Email({
                    title: title,
                    contents: contents,
                    sender: sender,
                    recipient: recipient
                })

                email.save()
                    .then(() => {
                        console.log('user', user)
                        io.in(String(user._id)).emit("newEmail", {
                            email
                        })
                        res.send('Email send sucess')
                    })
                    .catch(() => res.status(400).send({ error: 'Email send error' }))
            } else {
                res.send('Invalid email') 
            }
        })
        .catch(() => {

        })
})

module.exports = router