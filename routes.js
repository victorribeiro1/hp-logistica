const express = require('express')
const route = express.Router()

// home Controllers
const homeController = require('./controllers/home')

// login Controllers
const loginController = require('./controllers/login')

//home Routes
route.get('/', homeController.initialPage)

//home Routes
route.get('/login', loginController.login)
route.post('/login', homeController.initialPage)

module.exports = route