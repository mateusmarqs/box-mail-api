var express = require('express')
var app = express()
var http = require('http').createServer(app) // Express vai estar rodando no servidor HTTP nativo do node
var io = require('socket.io')(http)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')    
})

http.listen(3000, () => {
    console.log('Sevidor rodando...')
})