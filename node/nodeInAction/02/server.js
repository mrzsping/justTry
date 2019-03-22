// Serving static files to the user’s web browser
// Handling chat-related messaging on the server
// Handling chat-related messaging in the user’s web browser

let http = require('http');
let fs = require('fs');
let path = require('path');
let mime = require('mime');
let cache = {};
let chatServer = require('./lib/chat_server.js')

// /CREATING THE HTTP SERVER
let server = http.createServer((req, res) => {
  let filePath = false;

  if(req.url === '/'){
    filePath = 'public/index.html';
  }else{
    filePath = `public/${req.url}`;
  }
  let absPath = `./${filePath}`
  serverStatic(res, cache, absPath);
})
server.listen(3000)
chatServer.listen(server)
//The next helper determines whether or not a file is cached and,if so, serves it
function serverStatic(res, cache, absPath){
  if(cache[absPath]){
    sendFile(res, absPath, cache[absPath])
  }else{
    fs.exists(absPath, function(exists){
      if(exists){
        fs.readFile(absPath, function(err, data){
          if(err){
            send404(res);
          }else{
            cache[absPath] = data;
            sendFile(res, absPath, data);
          }
        })
      }else{
        send404(res);
      }
    })
  }
}

//serves file data
function sendFile(res, filePath, fileContent){
  res.writeHead(200, {'Content-Type': mime.lookup(path.basename(filePath))});
  res.end(fileContent);
}

//SENDING FILE DATA AND ERROR RESPONSES
function send404(res){
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write('Error');
  res.end();
}