const mongoose = require('mongoose')

//Schema Definition
const menuSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    imageURL: String

})

//creating Model
const menuModel = mongoose.model('Menu', menuSchema) //menu

module.exports = menuModel