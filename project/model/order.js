const mongoose = require('mongoose')

//Schema Definition
const orderSchema = new mongoose.Schema({

    customer_name: {
        type: String,
        required: true
    },
    dish_name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },

})

//creating Model
const orderModel = mongoose.model('Order', orderSchema) //order

module.exports = orderModel