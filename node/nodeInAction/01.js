let fs = require('fs')
let http = require('http')

//读取文件
// console.log(1)
// fs.readFile('./node.json', (e, data) => {
//   console.log(2)
// })
// console.log(3)
// fs.readFile('./node.json', (e, data) => {
//   console.log(4)
// })
// console.log(5)

// 2.http
// let server = http.createServer()
// server.on('request', (req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'})
//   res.end('12')
// })
// server.listen(3000)

// 3.stream：按时间加载，不用一次性全部加载
// let stream = fs.createReadStream('./node.json')
// stream.on('data', (data) => {
//   console.log(data)
// })

// stream.on('end', () => {
//   console.log('finished')
// })

// 4.stream and http
// let server = http.createServer()
// server.on('request', (req, res) => {
//   res.writeHead(200, {'Content-Type': 'image/jpg'})
//   fs.createReadStream('./1.jpg').pipe(res) //pipe：输出数据
// })
// server.listen(4000)