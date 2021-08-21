const express = require('express')
// const session = require('express-session')


// const http = require('http').createServer(app) // Express vai estar rodando no servidor HTTP nativo do node
// var io = require('socket.io')(http)

//Protegendo aplicação
const app = express()
const http = require('http').createServer(app) // Express vai estar rodando no servidor HTTP nativo do node
const port = 3000

const UserController = require('./server/controllers/UserController')

// require('./server/controllers/UserController')(app)

// require('./config/database')

app.use(UserController)

// Views
app.use(express.static('./views'));
app.use(express.static('./public'));
app.set('view engine', 'ejs')
app.use(express.urlencoded ({
    extended: false
}))  

// Session
// app.use(session({
//     secret: 'qualquercoisaaleatoriasegura',
//     coockie: {
//         maxage: 300000 //Aqui está em milisegundos
//     }
// }))

// app.use(express.json()) ----> PODE SER IMPORTANTE!

// io.on('connection', socket => {
//     socket.on('msg', data => {
//         console.log(data)
//         io.emit('showMsg', data)
//     })
// })

app.get('/', (req, res) => {
    res.render('login')    
})

app.get('/login', (req, res) => {
    res.render('login')    
})

http.listen(port, () => {
    console.log(`Sevidor rodando na porta ${port}`)
})