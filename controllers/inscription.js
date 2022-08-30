const Usermodel = require("../models/usersModel.js")

exports.Inscription= (_,res)=>{
    res.send("Veuillez vous m'inscrire ! ")
    
}
exports.User = (req,res) =>{
     const Users  = new Usermodel(req.body)
    
       Users.save().then((user)=>{
        return res.json(user)
       }).catch((err)=>{
     res.status(500).res.send(err)
    })
}