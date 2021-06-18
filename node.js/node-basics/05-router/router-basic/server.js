const http = require('http')
const fs = require('fs')
const mime = require('mime')

// http.createServer((req,res)=>{
//   const urlString = req.url
//   console.log('请求url', urlString)
//   switch(urlString){
//     case "/":
//       res.end('hello')
//       break;
//     case '/home':
//       fs.readFile('./home.html', (err, content)=> {
//         res.end(content)
//       })
//       break;
//     case '/app.js':
//       fs.readFile('./app.js', (err,content)=> {
//         res.end(content)
//       })
//       break;
//     case '/abc.jpg':
//       fs.readFile('./abc.jpg', (err,content)=> {
//         res.end(content)
//       })
//   }
// }).listen(8080, ()=>{
//   console.log('server running in localhost:8080')
// })

http.createServer((req, res) => {
  const urlString = req.url
  console.log(urlString)
  fs.readFile(`.${urlString}`,(err, content)=> {
    const type = mime.getType(urlString.split('.')[1])
    res.writeHead(200, {
      'Content-Type':type
    })
    res.end(content)
  })
}).listen(8080, () => {
  console.log('server running in localhost:8080')
})