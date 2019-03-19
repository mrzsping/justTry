let fs = require('fs');
let dir = process.argv.slice(2) || 'just';
let name = ''
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
dir.unshift('.')
if (dir[dir.length-1].indexOf('.html') > 0) {
  name = dir.pop()
  // fs.writeFile(`./${dir[0]}/${dir[1]}/${name}.html`,`${str}`,{flag:"a"},function(err) {
              
  // })
} else {

}

dir.reduce((sum, i) => {
  fs.mkdir(`${sum}/${i}`,function(err){
    console.log(`${sum}/${i}`)
    let str = err && err.code !== 'EEXIST' ? err : '创建成功~'
    console.log(str)
  })
return sum + '/' +i
})