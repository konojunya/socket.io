var express = require("express")
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require("path")

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('msg', function(data){
    socket.emit("date", new Date())
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
