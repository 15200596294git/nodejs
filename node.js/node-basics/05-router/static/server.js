const http = require('http')
const path = require('path')
const readStaticFile = require('./readStaticFile')

http.createServer((req,res)=>{
  const urlString = req.url
  let filePathName = path.join(__dirname, './public', urlString)
  // console.log(filePathName)
  const data = readStaticFile(filePathName)
  res.end(data)

  // res.write('hello')
  // res.end()
}).listen(8080, ()=>{
  console.log('server running...')
})