const http = require('http')
const querystring = require('querystring')
// const logger = require('')

const server = http.createServer((request, response) => {
  const url = request.url

  // let data = ''
  // request.on('data', (chunk) => {
  //   data += chunk
  // })
  // request.on('end', () => {

  // })
  response.writeHead(200, {
    'content-type': 'application/json;charset=utf-8'
  })
  // response.write('{"x": 100}')
  response.end(url)
})

server.listen(8080, () => {
  console.log('localhost:8080')
})