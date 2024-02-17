module.exports=(sequelize,Datatype)=>{
    const Category = sequelize.define("Category",{
        category_id:{
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
        }
    }
    ,{
        timestamps:false
    })
    Category.associate=models =>{
        Category.hasMany(models.Event,{
            onDelete:"cascade"
        })
    }
    return Category
}