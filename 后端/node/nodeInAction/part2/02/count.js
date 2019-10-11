var http = require('http');
var counter = 0;
var server = http.createServer(function(req, res) {
counter++;
res.write('I have been accessed ' + counter + ' times.');
res.end();
}).listen(8888);
//for multiuser applications, database management systems are a more sensible choice because they're designed to deal with concurrency issues.