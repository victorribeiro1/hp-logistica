const path = require('path')

exports.ServicesPage = (req, res) => {
   res.sendFile(path.resolve(__dirname, '../', 'public', 'servicos.html'))
}