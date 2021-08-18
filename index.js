const express = require('express')
const app = express()
const port = 3000
// var http = require('http').createServer(app) // Express vai estar rodando no servidor HTTP nativo do node
// var io = require('socket.io')(http)

// require('./config/database')

// Express config
app.use(express.static('./views'));
app.use(express.static('./public'));
app.set('view engine', 'ejs')
app.use(express.urlencoded ({
    extended: false
}))  
app.use(express.json())

// io.on('connection', socket => {
//     socket.on('msg', data => {
//         console.log(data)
//         io.emit('showMsg', data)
//     })
// })

app.get('/', (req, res) => {
    res.render('index')    
})

app.get('/login', (req, res) => {
    res.render('login')    
})

app.listen(port, () => {
    console.log(`Sevidor rodando na porta ${port}`)
})