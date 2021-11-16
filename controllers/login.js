const path = require('path')

exports.login = (req, res) => {
   res.sendFile(path.resolve(__dirname, '../', 'public', 'login.html'))
}

exports.homePage  = (req, res) => {
   res.sendFile(path.resolve(__dirname, '../', 'public', 'index.html'))
} 