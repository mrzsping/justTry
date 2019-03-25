// let net = require('net');
// let server = net.createServer((socket) => {
//   socket.on('data', (data) => {
//     socket.write(data)
//     console.log(data)
//   })
// })
// server.listen(8888)

//the following code defines a channel event emitter with a single listener that responds to someone joining the channel.
// publish/subscribe capabilities
var EventEmitter = require('events').EventEmitter;
var channel = new EventEmitter();
channel.on('join', function() {
  console.log("Welcome!");
});

// channel.emit('join')

//a simple publish/subscribe system using an event emitter


//the problem with this chat server is that when users close their connection and leave the chat room, they leave behind a listener that will attempt to write to a client that is no longer connected.
