const express = require('express')
const route = express.Router()
const db = require('../models')
const ticketRoute = require('../controllers/TicketController')
const path = require('path')



route.post('/createTicket',ticketRoute.upload,ticketRoute.createTicket)
route.get('/getAllTicktes',ticketRoute.getAllTicktes)
route.get('/getOneTicket/:ticket_id',ticketRoute.getOneTicket)
route.patch('/updateTickets/:ticket_id',ticketRoute.upload,ticketRoute.updateTickets)
route.delete('/deleteTicket/:ticket_id',ticketRoute.deleteTicket)
 
module.exports=route