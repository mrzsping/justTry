var connect = require('connect')
var url = require('url')
var app = connect()
  .use(rewrite)
  .use(showPost)
  .listen(3000)

function rewrite(req, res, next) {
  var path = url.parse(req.url).pathname;
  var amtch = path.match(/^\/blog\/posts\/(.+)/);
  if(match){
    findPostIdBySlug(match[1], function (err, id) { 
      if(err) return next(err);
      if(!id) return next(new Error('user not found'));
      req.url = '/blog/posts/' + id;
      next();
    })
  }else{
    next();
  }
}

function errorHandler(){
  var env = process.env.NODE_ENV || 'development';
  return function(err, req, res, next){
    res.statusCode = 500;
    switch(env){
      case 'development':
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(err));
        break;
      default:
        res.end('server error');
    }
  }
}