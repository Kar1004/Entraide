const express = require('express')
const Home = require('../controllers/home.js')
const {Inscription, User ,Users ,UsersUpdate, UsersDel, UserInscription} = require ('../controllers/inscription.js')
const routes = express.Router()



routes.get( '/home',Home)

//inscription
routes.get('/inscription', Inscription )
routes.post('/inscription', UserInscription)
routes.get('/inscription/All', Users)
routes.get('/inscription/user/:name', User)
routes.patch('/inscription/user/:name', UsersUpdate)
routes.get('/inscription/delete/:name', UsersDel)
module.exports = routes