const express = require ("express")
require('dotenv').config()
const app = express()
const exphbs= require('express-handlebars')
const router = require('./routes/routes')
const path = require('path')
const PORT = process.env.PORT || 8000

app.use(express.json())

app.use(express.static(path.join('public')))

app.engine('handlebars',exphbs.engine())
app.use(router)
app.set('view engine','handlebars')



app.listen( PORT , ()=>{
    console.log( `le server  est  en marche au port ${PORT}`);
})