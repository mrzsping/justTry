var connect = require('connect');
var app = connect();
app.use(logger);
app.use('/admin', restrict);
app.use('/admin', admin);
app.use(setup({some: 'options'}));
app.use(hello);
app.listen(8080);

function logger(req, res, next){
  next();
}
function hello(req, res){
  res.setHeader('content-type','text/plain');
  res.end('hello world')
}
function restrict(req, res, next){
  var authorization = req.headers.authorization;
  console.log(req.headers)
  if(!authorization) return next(new Error('unauthorized'));

  var parts = authorization.split(' ');
  var scheme = parts[0];
  var auth = new Buffer(parts[1], 'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];

  authenticateWithDatabase(user, pass, function (err) {
    if(err) return next(err);
    next();
  })
}

function admin(req, res, next){
  switch (req.url) {
    case '/':
      res.end('try /users');
    break;
    case '/users':
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(['tobi', 'loki', 'jane']));
    break;
  }
}

function setup(format){
  var regexp = /:(\w+)/g;
  
  return function logger(req, res, next){
    var str = format.replace(regexp, function(match, property){
      return req[property]
    })
    next();
  }
}
// function restrictFileAccess(){

// }
// what is the middleware in Connect?
// in connect, a misddleware component is a javascript function that by concention accepts three arguments: a request obect, a response object, and an argument commonli named next, which is a callback function indicating that the component is done and the next middleware component can be executed. 