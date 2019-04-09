let fs = require('fs');
let dir = process.argv.slice(2) || 'just';
let name = dir[dir.length - 1] || ''
let str = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${name}</title>
</head>
<body>
  
</body>
</html>`

fs.mkdir(`./${dir[0]}`,function(err){
  if(dir.length === 2){
    fs.mkdir(`./${dir[0]}`,function(err){
        fs.writeFile(`./${dir[0]}/${name}.html`,`${str}`,{flag:"a"},function(err) {
          if (err) {
            console.log(err)
          } else {
            console.log('创建成功')
          }
      })
    });
  } else {
    fs.mkdir(`./${dir[0]}/${dir[1]}`,function(err){
        fs.writeFile(`./${dir[0]}/${dir[1]}/${name}.html`,`${str}`,{flag:"a"},function(err) {
          if (err) {
            console.log(err)
          } else {
            console.log('创建成功')
          }
      })
    });
  }
});