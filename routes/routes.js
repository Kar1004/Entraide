const express = require('express')
const Home = require('../controllers/home.js')
const {Inscription, User} = require ('../controllers/inscription.js')
const routes = express.Router()



routes.get( '/home',Home)
routes.get('/inscription', Inscription )
routes.post('/inscription', User)
module.exports = routes