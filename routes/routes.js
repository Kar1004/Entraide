const express = require('express')
const Home = require('../controllers/demandeurControllers.js')
const Inscription = require('../controllers/demandeurControllers.js')
const routes = express.Router()



routes.get( '/home',Home)
routes.get('/inscription',Inscription)
 
module.exports = routes