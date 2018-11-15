const fs = require('fs')
__dirname = './db'

module.exports = uri => {
  return fs.readFileSync(__dirname + '/' + uri, 'utf8')
}
