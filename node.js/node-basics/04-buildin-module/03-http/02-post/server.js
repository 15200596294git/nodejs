const http = require('http')
const querystring = require('querystring')


const postData = querystring.stringify({
  province: '上海',
  city: '上海',
  district: '宝山区',
  address: '同济支路199号智慧七立方3号楼2-4层',
  latitude: 43.0,
  longitude: 160.0,
  message: '求购一条小鱼',
  contact: '13666666',
  type: 'sell',
  time: 1571217561
})

http.createServer((req,res)=> {
  const request = http.request({
    portocol: 'http:',
    hostname: 'localhost',
    method: 'POST',
    port: 3000,
    path: '/data',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Content-Length":Buffer.byteLength(postData)
    }
  }, (response)=> {

  })
  request.write(postData)
  request.end()
  res.end()


}).listen(8080, ()=> {
  console.log('服务启功成功 http://localhost:8080')
})