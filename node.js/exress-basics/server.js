const express = require('express')

const app = express()

app.use('/',(req,res)=>{
  res.send('hello world')
})
app.listen(8080, ()=>{
  console.log('server running...')
})