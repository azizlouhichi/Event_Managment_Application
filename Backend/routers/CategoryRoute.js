const express = require('express')
const route = express.Router()
const db = require('../models')
const categoryController = require('../controllers/CategoryController')
const path = require('path')



route.post('/createCategory',categoryController.upload,categoryController.createCategory)
route.get('/getAllCategory',categoryController.getAllCategory)
route.get('/getOneCategory/:category_id',categoryController.getOneCategory)
route.patch('/updateCategory/:category_id',categoryController.upload,categoryController.updateCategory)
route.delete('/deleteCategory/:category_id',categoryController.deleteCategory)
 
module.exports=route