const express = require ('express')
require('dotenv').config()
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static('public'))

app.get( '/' ,(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/index.html'))
})

app.post('/form' ,(req ,res)=>{
    const {name}=req.body;
    res.json({name})
})

app.listen( PORT , ()=>{
    console.log("le server  est  en marche au port" + PORT);
})