const express = require('express')
const route = express.Router()
const db = require('../models')
const userController = require('../controllers/UserController')

route.post('/register',userController.upload,userController.registerUser)
route.post('/login',userController.Login)
route.patch('/updateUser/:user_id',userController.upload,userController.updateUser)
module.exports=route