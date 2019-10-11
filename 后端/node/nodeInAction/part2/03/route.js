var connect = require('connect');
var router = require('./middleware/router');
var routes = {
  GET: {
    '/user': function(req, res){
      res.end('tobi, loki, ferret');
    },
    '/user/:id': function(req, res, id){
      res.end('user'+id);
    }
  },
  'DELETE': {
    '/user/:id': function(req, res, id){
      res.end('deleted user ' + id);
    }
  }
}

connect()
  .use(router(routes))
  .use(errorHandler())
  .listen(3000)