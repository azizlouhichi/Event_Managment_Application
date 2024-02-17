const db = require('../models')
const multer = require('multer')
const path = require('path')
const Ticket = db.ticket
const User = db.user
const Event = db.Event

const createTicket = async (req, res) => {
       
    let info = {
        date_achat:req.body.date_achat,
        nb_places:req.body.nb_places,
        UserUserId: req.body.UserUserId,
        EventEventId: req.body.EventEventId
    }
    const ticket = await db.Ticket.create(info)
    res.status(200).send("Ticket created !!")
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '100000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg || jpg || png/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('donner la correcte format')
    }
}).single('qr_code')

const getAllTicktes = async (req, res) => {

    let ticket = await db.Ticket.findAll({})
    res.status(200).send(ticket)
}

const getOneTicket = async (req, res) => {
    const ticket_id = req.params.ticket_id
    let ticket = await db.Ticket.findAll({where:{ticket_id:ticket_id}})
    res.status(200).send(ticket)
}
const updateTickets = async (req, res) => {
    const ticket_id = req.params.ticket_id  
    const ticket = await db.Ticket.update(req.body, { where: { ticket_id: ticket_id }})
    res.status(200).send(ticket)   
}
const deleteTicket = async (req, res) => {
    const ticket_id = req.params.ticket_id
    const ticket = await db.Ticket.destroy({ where:{ ticket_id: ticket_id}})
    res.status(200).send("Ticket is deleted !")
   
}

module.exports = {
    upload,
    createTicket,
    getAllTicktes,
    getOneTicket,
    updateTickets,
    deleteTicket
}