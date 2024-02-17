const express = require('express')
const route = express.Router()
const db = require('../models')
const eventController = require('../controllers/EventController')
const path = require('path')



route.post('/createEvent',eventController.upload,eventController.createEvents)
route.get('/getallevent',eventController.getAllEvent)
route.get('/getEventbyUser/:user_id',eventController.getEventbyUser)
route.get('/getEventbyCategory/:category_id',eventController.getEventbyCategory)
route.get('/getOneEvent/:event_id',eventController.getOneEvent)
route.patch('/updateEvent/:event_id',eventController.upload,eventController.updateEvent)
route.patch('/updatePlaces/:event_id',eventController.upload,eventController.updatePlaces)
route.delete('/deleteEvent/:event_id',eventController.deleteEvent)
 
module.exports=route