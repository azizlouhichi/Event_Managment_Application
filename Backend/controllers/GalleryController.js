const db = require('../models')
const multer = require('multer')
const path = require('path')



const Gallery = db.gallery

const createGallery = async (req, res) => {
       
    let info = {
        photo:req.body.photo
    }
    const gallery = await db.Gallery.create(info)
    res.status(200).send(gallery)
}
const storage = multer.diskStorage({
    destination: (req, files, cb) => {
        cb(null, './Images')
    },
    filename: (req, files, cb) => {
        cb(null, Date.now() + path.extname(files.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '100000000' },
    fileFilter: (req, files, cb) => {
        const fileTypes = /jpeg || jpg || png/
        const mimeType = fileTypes.test(files.mimetype)  
        const extname = fileTypes.test(path.extname(files.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('donner la correcte format')
    }
}).array('photo',5)



const getAllGallery = async (req, res) => {

    let gallery = await db.Gallery.findAll({})
    res.status(200).send(gallery)
}

const getOneGallery = async (req, res) => {
    const gallery_id = req.params.gallery_id
    let gallery = await db.Gallery.findAll({where:{gallery_id:gallery_id}})
    res.status(200).send(gallery)
}
const updateGallery = async (req, res) => {
    const gallery_id = req.params.gallery_id  
    const gallery = await db.Gallery.update(req.body, { where: { gallery_id: gallery_id }})
    res.status(200).send(gallery)   
}

const deleteGallery = async (req, res) => {
    const gallery_id = req.params.gallery_id
    const gallery = await db.Gallery.destroy({ where:{ gallery_id: gallery_id}})
    res.status(200).send("Gallery is deleted !")
   
}


module.exports = {
    upload,
    createGallery,
    getAllGallery,
    getOneGallery,
    updateGallery,
    deleteGallery
}