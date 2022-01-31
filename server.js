const express = require('express')
const app = express()
const port = 5000
const routes = require('./routes')

const path = require('path')

app.use(express.static(path.resolve(__dirname, 'public')))

app.use(routes)

app.listen(port, () => {
   console.log('running in ' + port)
})