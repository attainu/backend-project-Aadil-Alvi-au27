const { Router } = require('express')
const Order = require('../model/Order')
const orderRoutes = Router()

// For putting User's Order data in Mongo Db

orderRoutes.post('/client/order', async (req, res) => {

    try {

        const data = req.body

        console.log(data)
        result = await Order.create(data);

        res.sendFile(`C:/Users/ADIL/Desktop/project/public/`);

    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

orderRoutes.get('/order', async (req, res) => {
    result1 = await Order.find({})

    res.send(result1)

})

module.exports = orderRoutes