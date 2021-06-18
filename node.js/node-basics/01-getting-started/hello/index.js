const fs = require('fs')
fs.writeFile('./hello.txt', 'hello world',  (err, data)=> {
  if(err) {

  } else {
    console.log('文件创建成功')
  }
})