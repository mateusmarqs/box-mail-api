const express = require('express')
const session = require('express-session')
// var io = require('socket.io')(http)

//Configurando o Express
const app = express()
const http = require('http').createServer(app) // Express vai estar rodando no servidor HTTP nativo do node
const port = 3000

const UserController = require('./server/controllers/UserController')

// Views
app.use(express.static('./views'));
app.use(express.static('./public'));
app.set('view engine', 'ejs')
app.use(express.urlencoded ({
    extended: false
}))  

app.use(express.json())

// Session
// Rever informações nas próximas versões
app.use(session({
    name: 'session',
    secret: 'ss$235A6&s',
    resave: false,
    saveUninitialized: false,
    coockie: {
        expires: 60000
    }
}))

app.use(UserController)

// io.on('connection', socket => {
//     socket.on('msg', data => {
//         console.log(data)
//         io.emit('showMsg', data)
//     })
// })

app.get('/login', (req, res) => {
    res.render('login')    
})

http.listen(port, () => {
    console.log(`Sevidor rodando na porta ${port}`)
})