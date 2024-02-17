const db = require('../models')
const multer = require('multer')
const path = require('path')



const Event = db.events
const User = db.users
const category = db.category

const createEvents = async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).send(err);
      }
  
      let info = {
        libelle: req.body.libelle,
        photo: req.body.photo,
        prix: req.body.prix,
        date_debut: req.body.date_debut,
        date_fin: req.body.date_fin,
        heure_debut: req.body.heure_debut,
        heure_fin: req.body.heure_fin,
        nb_places: req.body.nb_places,
        UserUserId: req.body.UserUserId,
        CategoryCategoryId: req.body.CategoryCategoryId
      };
  
      const event = await db.Event.create(info);
      res.status(200).send(event);
      console.log(event);
    });
  };
  
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
        cb('give proper file format')
    }
}).single('photo')


const getAllEvent = async (req, res) => {

    let event = await db.Event.findAll({})
    res.status(200).send(event)
}

const getOneEvent = async (req, res) => {
    const event_id = req.params.event_id
    let event = await db.Event.findAll({where:{event_id:event_id}})
    res.status(200).send(event)
}
const getEventbyUser = async (req, res) => {
    const user_id = req.params.user_id
    let event = await db.Event.findAll({where:{UserUserId:user_id}})
    res.status(200).send(event)
}
const getEventbyCategory = async (req, res) => {
    const category_id = req.params.category_id
    let event = await db.Event.findAll({where:{CategoryCategoryId:category_id}})
    res.status(200).send(event)
}
const updateEvent = async (req, res) => {
    const event_id = req.params.event_id
    
    const event = await db.Event.update(req.body, { where: { event_id: event_id }})
    res.status(200).send(event)
    
}
const updatePlaces = async (req, res) => {
    const event_id = req.params.event_id
    
    const event = await db.Event.update(req.body.nb_places, { where: { event_id: event_id }})
    res.status(200).send(event)
    
}
const deleteEvent = async (req, res) => {
    const event_id = req.params.event_id
    const event = await db.Event.destroy({ where:{ event_id: event_id}})
    res.status(200).send("event is deleted !")
   
}


module.exports = {
    createEvents,
    getAllEvent,
    getOneEvent,
    updateEvent,
    deleteEvent,
    getEventbyUser,
    getEventbyCategory,
    upload,
    updatePlaces
}