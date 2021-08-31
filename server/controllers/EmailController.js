const express = require('express')
const router = express.Router()

const Email = require('../models/Email')
const User = require('../models/User')
const userAuth = require('../middlewares/userAuth')

router.post('/send', userAuth, (req, res) => {
    const {title, contents, sender = req.session.user.email, recipient} = req.body

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
                        io.in(String(user._id)).emit("newEmail", email)
                        console.log(`O usuário ${req.session.user.name} acabou de enviar um e-mail para ${user.name}.`)
                        res.redirect('/')
                    })
                    .catch(() => res.status(400).send({ error: 'Email send error' }))
            } else {
                res.render('./email-invalido') 
            }
        })
        .catch((error) => console.log(error))
})

router.post('/view', userAuth, (req, res) => {
    const {emailId} = req.body

    Email.findOne({_id: emailId})
        .then(email => {
            console.log(email)
            res.render('./email', {email: email})
        })
        .catch(error => console.log(error))
})

router.post('/delete', userAuth, (req, res) => {
    const {emailId} = req.body

    Email.findByIdAndDelete(emailId)
        .then(() => res.redirect('/'))
        .catch((error) => console.log(error))
})

module.exports = router