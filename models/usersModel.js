const mongoose = require('mongoose')

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
   statut: {
    type: String,
    require: true,
  },
});

const Usermodel = mongoose.model('User',UserSchema)

module.exports = Usermodel;