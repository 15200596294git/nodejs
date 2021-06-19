const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const router = require('./router/index')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
// 静态资源服务中间件(内置中间件)
app.use(express.static('./public'))

// view engine setup
app.engine('art', require('express-art-template'))
app.set('view options', {
  debug: process.env.NODE_ENV !== 'production',
  escape: false
})
app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'art')

app.use('/', router)
// app.use('/',(req,res)=>{
//   res.send('hello world')
// })
app.listen(8080, ()=>{
  console.log('server running...')
})