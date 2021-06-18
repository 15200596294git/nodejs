const fs = require('fs')
const fsPromises = require('fs').promises
// fs.mkdir('./logs', (err)=> {
//   if(err) throw err
//   console.log('文件夹创建成功!')
// })

// fs.rename('./logs', './log', (err)=> {
//   // if(err) throw err
//   console.log('文件夹名字修改成功')
// })

// fs.rmdir('./log', (err)=> {
//   if(err) throw err
//   console.log('文件删除成功')
// })

// fs.readdir('./logs', (err,result)=> {
//   if(err) throw err 
//   console.log('result', result)
// })

// fs.writeFile('./logs/log1.log', 'hello\nworld', (err)=> {
//   console.log('done.')
// })

// fs.appendFile('./logs/log1.log', '!!!',  (err)=> {
//   console.log('done.')
// })

// 删除文件
// fs.unlink('./logs/log1.log', (err)=> {
//   console.log('文件删除成功')
// })

// fs.readFile('./logs/log1.log','utf-8', (err,result)=> {
//   console.log(result)
// })


// fs.readFile('./logs/log1.log', (err,result)=> {
//   console.log(result.toString())
// })

// ;(async function(){
//   const result = await fsPromises.readFile('./logs/log1.log')
//   console.log(result.toString())
// )()

// fsPromises.readFile('./logs/log1.log').then(res=> res.toString()).then(res=> console.log(res))

// for (let i = 0; i < 10; i++) {
//   fs.writeFile(`./logs/log-${i}.log`, `log-${i}`,(err)=> {
//     console.log('创建文件成功')
//   })
// }

// fs.readdir('./logs', (err, result)=> {
//   console.log(result)
// })

// function readdir(dir){
//   fs.readdir(dir, (err, result)=> {
//     result.forEach(value=> {
//       let joinDir = `${dir}/${value}`
//       fs.stat(joinDir, (err,stas)=> {
//         if(stas.isDirectory()) {
//           readdir(joinDir)
//         } else {
//           fs.readFile(joinDir, 'utf-8',(err, content)=> {
//             console.log(content)
//           })
//         }
//       })
//     })
//   })
// }
// readdir('./logs')

fs.watch('./logs/log-0.log',(err)=> {
  console.log('file has change')
})