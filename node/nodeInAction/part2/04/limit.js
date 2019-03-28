var connect = require('connect');

var app = connect().use(type('application/json', connect.limit('32kb')))

app.listen(8080)

function type(type, fn) { 
  return function (req, res, next) { 
    var ct = req.headers['content-type'] || '';
    if(0 != ct.indexOf(type)){
      return next();
    }
    fn(req, res, next);
  }
}