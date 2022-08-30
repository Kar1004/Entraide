const Usermodel = require("../models/usersModel.js")

exports.Inscription= (_,res)=>{
    res.send("Veuillez vous m'inscrire ! ")
    
}
exports.UserInscription = (req,res) =>{
     const Users  = new Usermodel(req.body)
    
       Users.save().then((user)=>{
        return res.json(user)
       }).catch((err)=>{
     res.status(500).json(err)
    })
}

exports.Users = (req,res) =>{

    Usermodel.find().then((user)=>{
     return res.json(user)
    }).catch((err)=>{
  res.status(500).json(err)
 })
}

exports.User = (req,res) =>{
   const User = Usermodel(req.params.name)
  User.findOne({"name":name}).then((user)=>{
   return res.json(user)
  }).catch((err)=>{
res.status(500).json(err)
})
}

exports.UsersUpdate = (req,res) =>{
 Usermodel.findAndUpdate(req.params.name ,req.body).then((user)=>{
  return res.json(user)
 }).catch((err)=>{
res.status(500).json(err)
})
}
exports.UsersDel = (req,res) =>{
 Usermodel.findOneandDelete(req.name)
}
