const path = require('path')

exports.contactPage = (req, res) => {
   res.sendFile(path.resolve(__dirname, '../', 'contato.html'))
}