exports.listen = function(server){
  io = socketio.listen(server); // StartSocket.IO server allowing it to piggyback on existing HTTP server
  io.set('log level', 1);

  io.sockets.on('connection', function(socket){ //Define how each user connection will be handled
    guestNumber = assignGuestName(socket, guestNumber, nickNames, nameUsed); //Assign user a guest name when they connect
    joinRoom(socket, 'Lobby');//Place user in Lobby room when they connect

    handleMessageBroadcasting(socket, nickNames);//Handle user messages, namechange attempts, and room creation/changes
    handleNameChangeAttempts(socket, nickNames, namesUsed);
    handleRoomJoining(socket);

    socket.on('rooms', function() {//Provide user with list of occupied rooms on request
      socket.emit('rooms', io.sockets.manager.rooms);
    });

    handleClientDisconnection(socket, nickNames, namesUsed);//Define cleanup logic for when user disconnects
  })
}

//ASSIGNING GUEST NAMES
function assignGuestName(socket, guestNumber, nickNames, nameUsed){
  let name = 'Guest' + guestNumber;
  nickNames[socket.id] = name;
  socket.emit('nameRseult', {
    success: true,
    name: name
  })
  nameUsed.psuh(name);
  return guestNumber + 1;
}

//JOINING ROOMS
function joinRoom(socket, room){
  socket.join(room);
  currentRoom[socket.id] = room;
  socket.emit('joinResult', {room: room});
  socket.broadcast.to(room).emit('message', {
    text: nickNames[socket.id]+ 'has joined'+room+'.'
  })
  var usersInRoom = io.sockets.clients(room);
  if(usersInRoom.length > 1){
    var usersInRoomSummary = 'Users currently in'+room+':';
    for(var index in usersInRoom){
      let userSockedId = usersInRoom[index].id;
      if(userSockedId != socket.id){
        if(index > 0){
          usersInRoomSummary += '';
        }
        usersInRoomSummary += nickNames[userSockedId];
      }
    }
    usersInRoomSummary += '.';
    socket.emit('message', {text: usersInRoomSummary});
  }
}

//HANDLING NAME-CHANGE REQUESTS
function handleNameChangeAttempts(socket, nickNames, nameUsed){
  socket.on('nameAttempt', function(name){
    if(name.indexOf('Guest') == 0){
      socket.emit('nameResult', {
        success: false,
        message: 'Names cannot begin with "Guest".'
      })
    }else{
      if(nameUsed.indexOf(name) == -1){
        let previousName = nickNames[socket,id];
        let previousNameIndex = nameUsed.indexOf(previousName);
        nameUsed.push(name);
        nickNames[socket.id] = name;
        delete nameUsed[previousNameIndex];
        socket.emit('nameResult', {
          success: true,
          name: name
        });
        socket.broadcast.to(currentRoom[socket.id]).emit('message', {
          text: previousName+'is now known as'+name+'.'
        })
      }else{
        socket.emit('nameResult', {
          success: false,
          message: 'That name is already in use.'
        })
      }
    }
  })
}

//SENDING CHAT MESSAGES
function handleMessageBroadcasting(socket){
  socket.on('message', function(message){
    socket.broadcast.to(message.room).emit('message', {
      text: nickNames[socket.id]+':'+message.text
    })
  })
}

//CREATING ROOMS
function handleRoomJoining(socket){
  socket.on('join', function(room){
    socket.leave(currentRoom[socket.id]);
    joinRoom(socket, room.newRoom);
  })
}

//HANDLING USER DISCONNECTIONS
function handleClientDisconnection(socket){
  socket.on('disconnect', function(){
    var nameIndex = namesUsed.indexOf(nickNames[socket.id]);
    delete namesUsed[nameIndex];
    delete nickNames[socket.id]

  })
}