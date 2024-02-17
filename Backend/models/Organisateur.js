module.exports=(sequelize,Datatype)=>{
    const Organisateur = sequelize.define("Organisateur",{
        organisateur_id:{
            type:Datatype.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        }
    }
    ,{
        timestamps:false
    })
    Organisateur.associate=models =>{
        Organisateur.belongsTo(models.User,{ 
            onDelete:"cascade" 
        });
        Organisateur.hasMany(models.Event,{ 
            onDelete:"cascade"
        })
    }
    return Organisateur
}
