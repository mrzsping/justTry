var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer((req, res) => {
  switch(req.method){
    case 'POST':
      var item = '';
      req.setEncoding('utf8');
      req.on('data', (chunk) => {
        item += chunk;
      })
      req.on('end', () => {
        items.push(item);
        res.end('ok\n');
      })
    break;
    case 'GET':
      // items.forEach((item, i) => {
      //   res.write(`${i})${item}`)
      // });
      var body = items.map((item, i) => {
        return i + ')' + item;
      }).join('\n');
      res.setHeader('Content-Length', Buffer.byteLength(body));//you may be tempted to use the body.length value for the content-length, but the content-length value should represent the byte length, not character length.
      res.setHeader('Content-Type', 'text/plain; charset="utf-8"')
      res.end(body);
    break;
    case 'DELETE':
      var path = url.parse(req.url).pathname;
      var i = parseInt(path.slice(1), 10);

      if(isNaN(i)){//if the number is 'not a number', thee status code is set to 400 indicating a Bad Request.
        res.statusCode = 400;
        res.end('invalid item id');
      }else if(!items[i]){//the codde checks if the item exists, responding with a 404 not fonud error if it doesn't.
        res.statusCode = 400;
        res.end('item not found');
      }else{
        items.splice(i, 1);
        res.end('ok\n');
      }
    break;
  }
})
server.listen(3000)