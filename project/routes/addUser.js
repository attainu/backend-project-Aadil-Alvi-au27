const { Router } = require('express')
const User = require('../model/User')
const userRoutes = Router()
const bcrypt = require('bcryptjs')

// For putting User signup data in Mongo Db

userRoutes.post('/client/signup', async (req, res) => {

    try {

        const data = req.body
        console.log(data, 'before');
        const pass = await bcrypt.hash(data.userPassword, 10)
        data.userPassword = pass
        console.log(data, 'after')



        const oldUserPresent = await User.findOne({ userEmail: data.userEmail })

        if (oldUserPresent && oldUserPresent.email === email) {
            res.json({
                error: true,
                message: "User already existing"
            })
            return
        }


        await User.create(data);

        res.sendFile(`C:/Users/ADIL/Desktop/project/public/client/signup/`);

    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})



module.exports = userRoutes