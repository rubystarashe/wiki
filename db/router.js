const fs = require('fs')

const categories = fs.readdirSync(__dirname).filter(file => {
  return fs.statSync(__dirname + '/' + file).isDirectory()
})

const getFiles = name => {
  const path = __dirname + '/' + name
  return fs.readdirSync(path).filter(file => {
    return fs.statSync(path+'/'+file).isFile() && /([a-zA-Z0-9\s_\\.\-\(\):])+(.md)$/.test(file)
  })
}

module.exports = (_ => {
  let res = []
  categories.forEach(e => {
    const files = getFiles(e)
    files.forEach(f => {
      res.push('/' + e + '/' + f.split('.')[0])
    })
  })
  return res
})()
