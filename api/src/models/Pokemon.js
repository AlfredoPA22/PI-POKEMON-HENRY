const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    ID: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    Nombre:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    Imagen:{
      type:DataTypes.STRING
    },
    Vida:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    Ataque:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    Defensa:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    Velocidad:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    Altura:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    Peso:{
      type:DataTypes.INTEGER,
      allowNull:true
    }
  },{
    timestamps: false,
  });
};
