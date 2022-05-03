const mongoose = require('mongoose')

//Schema Definition
const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
    },
    userMobileNo: {
        type: Number,
        required: true,
    },
    userPassword: {
        type: String,
        required: true,
    },

})

//creating Model
const userModel = mongoose.model('User', userSchema) //user modal

module.exports = userModel