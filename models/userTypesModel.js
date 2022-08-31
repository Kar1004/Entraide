const mongoose= require ('mongoose')

const actionTypesSchema  = mongoose.Schema({

    userType: {
        type: String,
        enum : ['aidant','demandeur','visiteur'],
        default: 'visiteur'
    },
})

const actionTypeModel = mongoose.model("actionType", actionTypesSchema)
module.exports = userTypeModel