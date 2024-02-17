module.exports=(sequelize,Datatype)=>{
    const Ticket = sequelize.define("Ticket",{
        ticket_id:{
            type:Datatype.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        date_achat:{
            type:Datatype.DATEONLY,
            allowNull:true,
            validate: {
                isDate:true
              } 
        },
        nb_places:{
            type:Datatype.INTEGER,
            allowNull:true
        }
    }
    ,{
        timestamps:false
    })
    Ticket.associate=models =>{
        Ticket.belongsTo(models.User,{ 
            onDelete:"cascade",
        })
    },
    Ticket.associate=models =>{
        Ticket.belongsTo(models.Event,{ 
            onDelete:"cascade"
            
        })
    }
    return Ticket
}