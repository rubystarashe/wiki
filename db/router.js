const fs = require('fs')
__dirname = './db'

const getDirectory = path => fs.readdirSync(path).filter(file => {
  return fs.statSync(path + '/' + file).isDirectory()
})

const getFiles = name => {
  const path = __dirname + '/' + name
  const files = fs.readdirSync(path).filter(file => {
    return fs.statSync(path+'/'+file).isFile() && /([a-zA-Z0-9\s_\\.\-\(\):])+(.md)$/.test(file)
  })
  return files
}

module.exports = (_ => {
  let res = []
  getDirectory(__dirname).forEach(e => {
    res.push('/' + e)
    const files = getFiles(e)
    files.forEach(f => {
      res.push('/' + e + '/' + f.split('.')[0])
    })
  })
  return res
})()
