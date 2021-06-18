const http = require('http')
const https = require('https')
const cheerio = require('cheerio')

function filterData(data,res) {
  // console.log(data)
  const $ = cheerio.load(data)
  $('.section-item-box p').each((index, el)=> {
    // console.log($(el).text())
    res.write($(el).text())
  })
  res.end()
}

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain;charset=utf-8"
  })
  https.get('https://www.meizu.com/', (result)=> {
    let data 
    result.on('data', chunk=> {
      data += chunk
    })
    result.on('end', err=> {
      filterData(data, res)
    })
  })
}).listen(8080, () => {
  console.log('服务启动成功：localhost:8080')
})