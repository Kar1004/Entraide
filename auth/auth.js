const passport = require ('passport')

const Strategy = require ('passport-local')

const  Usermodel = require ('../models/usersModel.js')

passport.use('/signup',new Strategy({
       usernameField:'email',
       passportField:"passport"
}),
async (email,passport,done)=>{
    try{
        const user = await Usermodel.create ({email,password})
        return done(null,user)
    } catch(error){
        done(error)
    }
})


module.exports = passport