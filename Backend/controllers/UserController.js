const db = require('../models')

const multer = require('multer')
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = db.users

const registerUser = async (req, res) => {
    db.User.count({ where: { email: req.body.email } }).then(doc => {
        if (doc != 0) {
            res.status(400).send('this email is used')
        } {
            bcrypt.hash(req.body.pwd, 10).then(hashedPwd => {
                const user = db.User.create({
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    photo: req.body.photo,
                    phone: req.body.phone,
                    email: req.body.email,
                    pwd: hashedPwd,
                })
                res.status(200).send(user)
                console.log(user)
            })
        }
    })
}

const PrivateKey = "zefzfj&é§/.?.//§!:6546*/*-+-*/0:,:;965444888"
const Login = async (req, res) => {
    let user = await db.User.findOne({ where: { email: req.body.email } }).then(user => {
        if (!user) {
            res.status(400).json("invalid !!")
        } else {
            bcrypt.compare(req.body.pwd, user.pwd).then(egal => {
                if (egal) {
                    let token = jwt.sign({ user_id: user.user_id, nom: user.nom, prenom: user.prenom }, PrivateKey, {
                        expiresIn: "24h"
                    })
                    res.status(200).json({ token: token })
                } else {
                    res.status(400).json("invalid password!! ")
                }
            })
        }
    })



}

const updateUser = async (req, res) => {
    const user_id = req.params.user_id
    bcrypt.hash(req.body.pwd, 10).then(hashedPwd => {
        const user = db.User.update({
            nom: req.body.nom,
            prenom: req.body.prenom,
            photo: req.body.photo,
            phone: req.body.phone,
            email: req.body.email,
            pwd: hashedPwd,
        }, { where: { user_id: user_id } })
        res.status(200).send(user)
    })


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
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg ||jpg || png/
        const mimeType = fileTypes.test(file.mimeType)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('donner la correcte format')
    }
}).single('photo')
module.exports = {
    registerUser,
    upload, Login,
    updateUser
}

