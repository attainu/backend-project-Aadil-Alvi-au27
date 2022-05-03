const { Router, json } = require('express')
const User = require('../model/User')
const loginRoutes = Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// For putting User signup data in Mongo Db
loginRoutes.use(json())

loginRoutes.post('/login', async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const userPresent = await User.findOne({ userEmail: data.userEmail })
        console.log(userPresent)
        if (!userPresent) {
            return res.json({ status: 'error', error: 'Invalid username/password' })
        }

        if (await bcrypt.compare(data.userPassword, userPresent.userPassword)) {

            //generate a token

            console.log('done')

            const jwtToken = jwt.sign({ currentUser: userPresent.userEmail }, process.env.JWT_secret, { expiresIn: '2h' })
            console.log(jwtToken)
            res.json({
                error: false,
                status: 'ok',
                message: "User Logged in",
                data: jwtToken,

            })
            return
        }


        res.json({ status: 'error', error: 'Invalid username/password' })



    } catch (err) {
        res.json({
            status: 'error',
            errorObj: err,
            message: "Unknown Error"

        })
    }

})


module.exports = loginRoutes