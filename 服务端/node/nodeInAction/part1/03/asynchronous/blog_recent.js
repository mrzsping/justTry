let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
  if(req.url == '/'){
    getTitles(res)
  }
}).listen(8000)

function getTitles(res){
  fs.readFile('./title.json', function(err, title){
    if(err) return hadError(res) // it makes it explicit that the function should not continue execting.
    getTemplate(res, title)
  })
}

function getTemplate(res, title){
  fs.readFile('./template.html', function(err, data){
    if (err) return hadError(res)
    res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(formatHtml(title, data));
  })
}

function formatHtml(title, data){
  var tmpl = data.toString();
  let titles = JSON.parse(title.toString());
  let html = tmpl.replace('%', titles.join('</li><li>'));
 return html
}

function hadError(res){
  res.end('Server Error');
}