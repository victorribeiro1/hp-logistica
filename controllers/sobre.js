const path = require('path')

exports.aboutPage = (req, res) => {
   res.sendFile(path.resolve(__dirname, '../', 'public', 'sobre.html'))
}