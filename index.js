const express = require('express')
const session = require('express-session')

//Configurando o Express
const app = express()
const http = require('http').createServer(app) // Express vai estar rodando no servidor HTTP nativo do node.
io = require('socket.io')(http)
const port = 3000

const UserController = require('./server/controllers/UserController')
const EmailController = require('./server/controllers/EmailController')

// Views
app.use(express.static('./views'));
app.use(express.static('./public'));
app.set('view engine', 'ejs')

//Body Parser
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
        maxAge: 60000
    }
}))

app.use(UserController)
app.use(EmailController)

// Socket.IO
io.on('connection', socket => {
    socket.on('subscribe', function (userRoom) {
        console.log(`O usuário de ID = ${userRoom} se conectou.`)
        socket.join(userRoom)
    })
})

app.get('/login', (req, res) => {
    res.render('login')    
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

http.listen(port, () => {
    console.log(`Sevidor rodando na porta ${port}`)
})