const db = require('../models')

const Organisateur = db.organisateur
const User = db.user
const createOrganisateur = async (req, res) => {
       
    const organisateur = await db.Organisateur.create({ 
        UserUserId:req.body.UserUserId
    })
    res.status(200).send("Organisateur created !!")
}

const getAllOrganisateur = async (req, res) => {

    let organisateur = await db.Organisateur.findAll({})
    res.status(200).send(organisateur)
}

const getOneOrganisateur = async (req, res) => {
    const organisateur_id = req.params.organisateur_id
    let organisateur = await db.Organisateur.findAll({where:{organisateur_id:organisateur_id}})
    res.status(200).send(organisateur)
}
const updateOrganisateur = async (req, res) => {
    const organisateur_id = req.params.organisateur_id  
    const organisateur = await db.Organisateur.update(req.body, { where: { organisateur_id: organisateur_id }})
    res.status(200).send(organisateur)   
}
const deleteOrganisateur = async (req, res) => {
    const organisateur_id = req.params.organisateur_id
    const oraganisateur = await db.Organisateur.destroy({ where:{ organisateur_id: organisateur_id}})
    res.status(200).send("Organisateur is deleted !")
   
}

module.exports = {
    createOrganisateur,
    getAllOrganisateur,
    getOneOrganisateur,
    updateOrganisateur,
    deleteOrganisateur
}