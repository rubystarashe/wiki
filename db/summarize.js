const fs = require('fs')
__dirname = './db'

const categories = fs.readdirSync(__dirname).filter(file => {
  return fs.statSync(__dirname + '/' + file).isDirectory()
})

const getFiles = name => {
  const path = __dirname + '/' + name
  return fs.readdirSync(path).filter(file => {
    return fs.statSync(path+'/'+file).isFile() && /([a-zA-Z0-9\s_\\.\-\(\):])+(.md)$/.test(file)
  })
}

const fileList = (_ => {
  let list = []
  categories.forEach(c => {
    const files = getFiles(c)
    files.forEach(f => {
      list.push(__dirname + '/' + c + '/' + f)
    })
  })
  return list
})()

module.exports = (_ => {
  let data = {}
  fileList.forEach(f => {
    const f_info = f.split('/')
    const categori = f_info.slice(-2)[0]
    const fileName = f_info.slice(-1)[0]
    const document = fileName.split('.')[0]
    data[categori] = data[categori] ? [ ...data[categori] ] : []
    let image
    let column = fs.readFileSync(f, 'utf8').split('\r\n').filter(line => { return line })
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
    data[categori].push({
      uri: categori + '/' + fileName,
      document,
      title: column[0],
      subclass: column[1],
      description: column[2],
      image
    })
  })
  return data
})()
