const db = require('./models')
const sequelize = require('sequelize')
const cors = require('cors')


const express = require('express')
const http = require('http')
const app = express()
app.use(cors({
    origin: 'http://localhost:3001'
}))


app.use(express.urlencoded({extended:true}))
app.use(express.json())


const eventRoute =require("./routers/EventRoute")
const userRoutes = require('./routers/UserRoute')
const categoryRoute = require('./routers/CategoryRoute')
const ticketRoute = require('./routers/TicketRoute')
const oraganisateurRoute=require('./routers/OrganisateurRoute')
const galleryRoute = require('./routers/GalleryRoute')


app.use('/api/event',eventRoute)
app.use('/api/user', userRoutes)
app.use('/api/category', categoryRoute)
app.use('/api/ticket', ticketRoute)
app.use('/api/organisateur', oraganisateurRoute)
app.use('/api/gallery', galleryRoute)


app.use('/Images',express.static('./Images'))

db.sequelize.sync().then(()=>{
    app.listen(3000,()=>console.log('server running'))
})
