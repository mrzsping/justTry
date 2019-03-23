var events = require('events');
var net = require('net');
var channel = new events.EventEmitter();
var util = require('util');

function Watcher(watchDir, processedDir){
    this.watchDir = watchDir;
    this.processedDir = processedDir;
}

util.inherits(Watcher, events.EventEmitter);

channel.clients = {};
channel.subscriptions = {};

channel.on('join', function(id, client){ //Add a listener for the join event that stores a user’s client object, allowing the application to send data back to the user.
    this.clients[id] = client;
    this.subscriptions[id] = function(senderId, message){
        if(id != senderId){
            this.clients[id].write(message);
        }
    }
    var welcome = "Welcome!\n"+ 'Guests online: ' + this.listeners('broadcast').length;
    client.write(welcome + "\n");
    this.on('broadcast', this.subscriptions[id]);//Add a listener, specific to the current user, for the broadcast event.
})

channel.on('leave', function(id){
    channel.removeListener('broadcast', this.subscriptions[id]);
    channel.emit('broadcast', id, id+'has left the chat.\n ' )
})

channel.on('shutdown', function(){
    channel.emit('broadcast', '','chat has shut down.\n');
    channel.removeAllListeners('broadcast');
})

channel.setMaxListeners(50);

let server = net.createServer(function(client){
    let id = client.remoteAddress + ':' + client.remotePort;

    client.on('connect', function(){
        channel.emit('join', id, client); //Emit a join event when a user connects to the server, specifying the user ID and client object.
    });

    client.on('data', function(data){
        data = data.toString();
        if(data == 'shutdown\r\n'){
            channel.emit('shutdown');
        }
        channel.emit('broadcast', id, data);//Emit a channel broadcast event, specifying the user ID and message, when any user sends data.
    })

    client.on('close', function(){
        channel.emit('leave', id);
    })
})

server.listen(8888)