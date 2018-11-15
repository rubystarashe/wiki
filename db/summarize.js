const fs = require('fs')
__dirname = './db'

const getFiles = name => {
  const path = __dirname + '/' + name
  return fs.readdirSync(path).filter(file => {
    return fs.statSync(path+'/'+file).isFile() && /([a-zA-Z0-9\s_\\.\-\(\):])+(.md)$/.test(file)
  })
}

module.exports = categori => {
  let data = []
  try {
    getFiles(categori).forEach(f => {
      const f_info = f.split('/')
      const fileName = f_info.slice(-1)[0]
      const document = fileName.split('.')[0]
      const uri = categori + '/' + fileName
      let image
      let column = fs.readFileSync(__dirname + '/' + uri, 'utf8').split('\r\n').filter(line => { return line })
      column.forEach((_, i) => {
        if (!image) {
          const imageRegex = /http[s]?:\/\/.*\.(jp[e]?g|gif|png)/.exec(column[i])
          if (imageRegex) {
            image = imageRegex[0]
            column.splice(i, 1)
          }
        }
        column[i] = column[i].replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, '')
        column[i] = column[i].replace(/^ /gi, '')
      })
      data.push({
        uri: '/' + categori + '/' + document,
        document,
        title: column[0],
        subclass: column[1],
        description: column[2],
        image
      })
    })
  } catch(e) {}
  return data
}
