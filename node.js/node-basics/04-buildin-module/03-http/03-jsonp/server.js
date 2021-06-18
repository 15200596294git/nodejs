const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  const urlStr = req.url
  const urlObj = url.parse(urlStr, true)

  switch (urlObj.pathname) {
    case '/api/data':
      res.write(`${urlObj.query.cb}("雷猴")`)
      break;
    default:
      res.write('page not found.')
  }
  res.end()
}).listen(8080, ()=> {
  console.log('http://localhost:8080')
})