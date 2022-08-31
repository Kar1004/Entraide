const { Router } = require('express')
const express = require('express')
const passport = require ('passport')
const Home = require('../controllers/home.js')
const {Inscription, User ,Users ,UsersUpdate, UsersDel, UserInscription} = require ('../controllers/inscription.js')
const routes = express.Router()



routes.get( '/home',Home)
//Authentification
routes.post('/signup',passport.authenticate('signup' ,{session:false}),
async(req,res,next) =>{
    res.json({
        message:'signup Ok',
        user: req.user
    })
}
)

//inscription
routes.get('/inscription', Inscription )
routes.post('/inscription', UserInscription)
routes.get('/inscription/All', Users)
routes.get('/inscription/user/:name', User)
routes.patch('/inscription/user/:name', UsersUpdate)
routes.get('/inscription/delete/:name', UsersDel)
module.exports = routes