const express = require('express');
const menuRoutes = require('./routes/additem')
const userRoutes = require('./routes/addUser')
const loginRoutes = require('./routes/authlogin')
const notFoundRoutes = require('./routes/notFound')
const dbHelper = require('./config/db.js')
require('dotenv').config()
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const prt = process.env.port || 3000;

dbHelper.dbinit()

app.use(express.static('public'))


app.use(menuRoutes)
app.use(userRoutes)
app.use(loginRoutes)

app.use(notFoundRoutes)
app.listen(prt, () => {
    console.log("Server Connected")
})