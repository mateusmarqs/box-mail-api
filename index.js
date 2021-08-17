var app = require('./config/express')()
var http = require('http').createServer(app) // Express vai estar rodando no servidor HTTP nativo do node
var io = require('socket.io')(http)

require('./config/database')

io.on('connection', socket => {
    socket.on('msg', data => {
        console.log(data)
        io.emit('showMsg', data)
    })
})

app.get('/', (req, res) => {
    res.render('index')    
})

http.listen(3000, () => {
    console.log('Sevidor rodando...')
})