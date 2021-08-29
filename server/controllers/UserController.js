const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const Users = require('../models/User')
const Email = require('../models//Email')
const userAuth = require('../middlewares/userAuth')

router.post('/register', (req, res) => {
    const {name, email, password} = req.body

    var hash = bcrypt.hashSync(password, 10)

    const newUser = new Users({
        name: name,
        email: email,
        password: hash
    })

    newUser.save()
        .then(() => res.redirect('/login'))
        .catch(() => res.status(400).send({ error: 'Registration failed' }))
})

router.post('/authenticate', (req, res) => {
    const {email, password} = req.body

    Users.findOne({email: email})
        .then(user => {
            const comparation = bcrypt.compareSync(password, user.password)
            
            if (comparation) {
                req.session.user = {
                    id: user._id,
                    email: user.email,
                    name: user.name
                }
                res.redirect('/')
            } else {
                res.redirect('/login')
            }
        })
        .catch((error) => console.log(error))
})

router.get('/logout', userAuth, (req, res) => {
    req.session.user = undefined
    res.redirect('/login')
})

router.get('/', userAuth, (req, res) => {

    user = req.session.user
    
    Email.find({recipient: user.email})
        .then(emails => {
            res.render('./index', {emails: emails, userId: user.id, userName: user.name})
        })
        .catch(() => res.send('Erro ao buscar emails'))
})

module.exports = router