const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim:true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
   statut: {
    type: Number,
    require: true,
  },
});

const Usermodel = mongoose.model('User',UserSchema)

module.exports = Usermodel;