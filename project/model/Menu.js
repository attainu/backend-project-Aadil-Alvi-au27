const mongoose = require('mongoose')

//Schema Definition
const menuSchema = new mongoose.Schema({

    Dish_name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        possibleValues: ['Veg', 'Non Veg']
    },
    imageUrl: String



})

//creating Model
const MenuModel = mongoose.model('Menu', menuSchema) //menu

module.exports = MenuModel 