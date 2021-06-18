const path = require('path')
const mime = require('mime')
const fs = require('fs')

function readStaticFile(filePathName) {
  console.log('filePathName', filePathName)
  // 判断文件是否存在
  if (fs.existsSync(filePathName)) {
    const extname = path.extname(filePathName)
    const mimeType = mime.getType(extname)
    // 是否为文件
    if(fs.statSync(filePathName).isFile()) {
      return fs.readFileSync(filePathName)
    } else {
      return 'target is a directory'
    }
    console.log('file exist')
  } else {
    return 'Page Not Found'
    console.log('file not found')
  }


}

module.exports = readStaticFile