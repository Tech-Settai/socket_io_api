var express = require('express');
var http = require('http').Server(express);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
  socket.on('my message', (msg) => {
    console.log('message: ' + JSON.stringify(msg));
    io.emit('chat msg', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
