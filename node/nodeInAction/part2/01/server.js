var http = require('http');
var body = 'hello world';

var server = http.createServer(function(req, res){
  req.setEncoding('utf8');
  req.on('data', function(chunk){
    console.log(chunk)
  })
  res.setHeader('content-length',body.length);
  res.setHeader('content-type', 'text/plain');
  // res.setHeader('location', 'http://baidu.com');
  // res.statusCode = 302;
  req.on('end', function () { 
    console.log('done')
  })
  res.end(body);
})
server.listen(3000);
