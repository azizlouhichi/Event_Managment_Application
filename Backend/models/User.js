module.exports=(sequelize,Datatype)=>{
    const User = sequelize.define("User",{
        user_id:{
            type:Datatype.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        nom:{
            type:Datatype.STRING,
            allowNull:true,
            validate: {
              len:[1,50]
            }           
        },
        prenom:{
            type:Datatype.STRING,
            allowNull:true,
            validate: {
              len:[1,50]
            }           
        },
        photo:{
            type:Datatype.STRING,
            allowNull:true

        },
        phone:{
            type:Datatype.STRING,
            allowNull:true,
            validate: {
              len:[1,30]
            }           
        },
        email:{
            type:Datatype.STRING,
            allowNull:true,  
        },
        pwd:{
            type:Datatype.STRING,
            allowNull:true,          
        }
    }
    ,{
        timestamps:false
    })
    User.associate=function(models){
        User.hasMany(models.Event,{
            onDelete:"cascade",
        });
        User.hasMany(models.Ticket,{
            onDelete:"cascade"
        });
        User.hasMany(models.Organisateur,{
            onDelete:"cascade"
        });
    }
    return User
}