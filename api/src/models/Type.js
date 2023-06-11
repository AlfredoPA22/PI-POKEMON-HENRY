const {DataTypes} =require('sequelize');

module.exports=(sequelize)=>{
    sequelize.define('type',{
        ID:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        Nombre:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        }
    },
    {
        timestamps: false,
    })
}
