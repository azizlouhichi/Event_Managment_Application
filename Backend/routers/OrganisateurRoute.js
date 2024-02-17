const express = require('express')
const route = express.Router()
const db = require('../models')
const organisateurRoute = require('../controllers/OrganisateurController')



route.post('/createOrganisateur',organisateurRoute.createOrganisateur)
route.get('/getAllOrganisateur',organisateurRoute.getAllOrganisateur)
route.get('/getOneOrganisateur/:organisateur_id',organisateurRoute.getOneOrganisateur)
route.patch('/updateOrganisateur/:organisateur_id',organisateurRoute.updateOrganisateur)
route.delete('/deleteOrganisateur/:organisateur_id',organisateurRoute.deleteOrganisateur)
 
module.exports=route