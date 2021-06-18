const fs = require('fs')
const zlib = require('zlib')

const gzip = zlib.createGzip()

const readStream = fs.createReadStream('./logs.txt')
const writeStream = fs.createWriteStream('./logs.zlib')

readStream.pipe(gzip).pipe(writeStream)

