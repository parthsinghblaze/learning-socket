let express = require('express'),
    app = express(),
    http = require('http'),
    socketIO = require('socket.io'),
    server, io;

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'index.html')
})

server = http.Server(app)

server.listen(5000)

console.log("Hello i am a server JS")

io = socketIO(server);

io.on('connection', function (socket) {
    console.log(`"Hii`)
    let controllers = ['comments', 'posts']

    for (let i = 0; i<controllers.length; i++) {
        require('./controllers/' + controllers[i] +
            '.controller')(socket);
    }

})