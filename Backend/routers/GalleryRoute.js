const express = require('express')
const route = express.Router()
const db = require('../models')
const galleryController = require('../controllers/GalleryController')
const path = require('path')



route.post('/createGallery',galleryController.upload,galleryController.createGallery)
route.get('/getAllGallery',galleryController.getAllGallery)
route.get('/getOneGallery/:gallery_id',galleryController.getOneGallery)
route.patch('/updateGallery/:gallery_id',galleryController.upload,galleryController.updateGallery)
route.delete('/deleteGallery/:gallery_id',galleryController.deleteGallery)
 
module.exports=route