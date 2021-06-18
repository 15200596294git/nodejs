const http = require('http')
const url = require('url')
const { createProxyMiddleware } = require('http-proxy-middleware')

http.createServer((req,res)=> {
  let urlStr = req.url
  if(/\/api-ajax/.test(urlStr)) {
    const proxy = createProxyMiddleware('/api-ajax',{
      target: 'https://list.vip.com',
      changeOrigin:true
    })
    proxy(req,res)
  } else if(/\/api/.test(urlStr)){
      const proxy2 = createProxyMiddleware('/api', {
        target: 'https://m.lagou.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      })
      proxy2(req,res)
  }
}).listen(8080,()=> {
  console.log('服务启动成功：localhost:8080')
})