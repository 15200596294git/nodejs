const express = require('express')
const template = require('art-template')
const path = require('path')
const fs = require('fs')

const { dataArray } = require('../model/list')
const router = express.Router()
router.get('/', (req, res) => {
  res.send('hello')
})
router.get('/index', (req, res, next) => {
  console.log(req.query);
  const query = req.query

  res.json(query)
})

// router.get('/api/list', (req, res, next) => {
//   let data = '<ul>'
//   for (let i = 0; i < 100; i++) {
//     data += `<li> line ${i}</li>`
//   }
//   data += '</ul>'
//   res.send(data)
// })

// router.get('/api/list', (req, res, next) => {
//   let data = {
//     code: 200,
//     data: [],
//     message: 'ok'
//   }
//   for (let i = 0; i < 100; i++) {
//     data.data.push(`line ${i}`)
//   }
//   res.send(data)
// })

router.get('/api/list', (req, res, next) => {
  // res.set('Content-Type', 'application/json;charset=utf-8')
  

  const html = template(path.join(__dirname, '../view/list-html.art'), {
    data: dataArray
  })

  fs.writeFileSync(path.join(__dirname, '../public/list.html'), html)

  res.send('page has been compiled')
})


router.post('/index', (req, res, next) => {
  res.send(req.body)
  // res.send({"a":"1"})
})


module.exports = router