const express = require ("express")
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const bodyParser = require("body-parser")
const exphbs= require('express-handlebars')
const router = require('./routes/routes')
const path = require('path')
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(bodyParser.json())
app.use(express.static(path.join('public')))

app.engine('handlebars',exphbs.engine())
app.use(router)
app.set('view engine','handlebars')
mongoose.connect(process.env.MONGODB,{
useNewUrlParser: true,
UseUnifiedTopology:true,

})


app.listen( PORT , ()=>{
    console.log( `le server  est  en marche au port ${PORT}`);
})