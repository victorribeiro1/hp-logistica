const express = require('express')
const route = express.Router()

// home Controllers
const homeController = require('./controllers/home')

// about Controllers
const aboutController = require('./controllers/sobre')

// about Controllers
const contactController = require('./controllers/contato')

//home Routes
route.get('/', homeController.initialPage)

//home Routes
route.get('/sobre-nos', aboutController.aboutPage)

//home Routes
route.get('/contato', contactController.contactPage)

module.exports = route