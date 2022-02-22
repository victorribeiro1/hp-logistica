const express = require('express')
const route = express.Router()

// home Controllers
const homeController = require('./controllers/home')

// about Controllers
const ServicesController = require('./controllers/servicos')

// about Controllers
const contactController = require('./controllers/contato')

//home Routes
route.get('/', homeController.initialPage)

//home Routes
route.get('/nossos-servicos', ServicesController.ServicesPage)
route.get('/nossosServicos', ServicesController.ServicesPage)
route.get('/nossos_servicos', ServicesController.ServicesPage)

//home Routes
route.get('/contato', contactController.contactPage)

module.exports = route