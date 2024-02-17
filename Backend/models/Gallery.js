module.exports=(sequelize,Datatype)=>{
    const Gallery = sequelize.define("Gallery",{
        gallery_id:{
            type:Datatype.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        photo:{
            type:Datatype.STRING,
            allowNull:true

        }
    }
    ,{
        timestamps:false
    })
    Gallery.associate=models =>{
        Gallery.belongsTo(models.Event,{ 
            onDelete:"cascade" 
        })
    }
    return Gallery
}