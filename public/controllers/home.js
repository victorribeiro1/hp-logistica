const path = require('path')

exports.initialPage = (req, res) => {
   res.sendFile(path.resolve(__dirname, '../', 'index.html'))
}