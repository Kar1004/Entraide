const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim:true,
  },
  age: {
    type: Number,
    require: true,
  },
  description:{
    type:String,
    require:true,
  },
   statut: [{ type:String, 
    ref: 'ActionType' }],
  followers:{
    type:Array,
    default:[]
  },
  following:{
    type:Array,
    default:[]
  },
  email:{
    type:String,
    required:true,
    unique:true,

  },
  password:{
    type:String,
    required:true,

  }
});

//hash and préhook

UserSchema.pre('save', async function (next){
  const user = this

  const hash = await bcrypt.hash(user.password ,10)

  user.password = hash

  next()
})

UserSchema.methods.isValidPassord = async function  (password) {
  const user = this

  const isSame = await bcrypt.compare(password,user.password)

  return isSame //return true or false
  
}

//import de usermodel

const Usermodel = mongoose.model('User',UserSchema)

module.exports = Usermodel;