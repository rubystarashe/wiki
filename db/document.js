const fs = require('fs')
__dirname = './db'

module.exports = uri => {
  const data = fs.readFileSync(__dirname + '/' + uri, 'utf8')
  let column = data.split('\r\n')
  column.splice(0, 4)
  return column.join('\r\n')
}
