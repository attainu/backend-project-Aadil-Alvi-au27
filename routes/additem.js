const { Router } = require('express')
const Menu = require('../model/Menu')
const base64 = require('js-base64')
const multer = require('multer')
require('dotenv').config();

const menuRoutes = Router()
// const cloud = require('./config/cloud')
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: 'smoke-ngrills',
    api_key: process.env.Cloud_Api_key,
    api_secret: process.env.Cloud_Api_secret,
})
const upload = multer({
    storage: multer.memoryStorage()
})

menuRoutes.post(`/admin/addMenu`, upload.single('menuImg'), async (req, res) => {
    try {

        const data = req.body

        const fileData = req.file
        console.log(fileData)
        let result;
        if (fileData) {

            const bufferDataBase64 = base64.encode(fileData.buffer)
            const res = await cloudinary.uploader.upload(`data:${fileData.mimetype};base64,${bufferDataBase64}`)

            data.imageUrl = res.secure_url
            console.log(data)
            result = await Menu.create(data);
        }
        res.sendFile(`C:/Users/ADIL/Desktop/project/public/admin/addMenu/`);
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }

})
menuRoutes.get('/items', async (req, res) => {
    result1 = await Menu.find({})


    res.send(result1)

})

module.exports = menuRoutes