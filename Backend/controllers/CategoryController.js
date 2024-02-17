const db = require('../models')
const multer = require('multer')
const path = require('path')



const Category = db.category

const createCategory = async (req, res) => {
       
    let info = {
        nom:req.body.nom
    }
    const category = await db.Category.create(info)
    res.status(200).send("category added !!")
    console.log(Category)
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
}).single('photo')



const getAllCategory = async (req, res) => {

    let category = await db.Category.findAll({})
    res.status(200).send(category)
}

const getOneCategory = async (req, res) => {
    const category_id = req.params.category_id
    let category = await db.Category.findAll({where:{category_id:category_id}})
    res.status(200).send(category)
}
const updateCategory = async (req, res) => {
    const category_id = req.params.category_id  
    const category = await db.Category.update(req.body, { where: { category_id: category_id }})
    res.status(200).send(category)   
}

const deleteCategory = async (req, res) => {
    const category_id = req.params.category_id
    const category = await db.Category.destroy({ where:{ category_id: category_id}})
    res.status(200).send("Category is deleted !")
   
}


module.exports = {
    upload,
    createCategory,
    getAllCategory,
    getOneCategory,
    updateCategory,
    deleteCategory
}