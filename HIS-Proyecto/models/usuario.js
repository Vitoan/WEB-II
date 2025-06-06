'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    rol: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Usuario',
  });
 Usuario.associate = function(models) {
  Usuario.hasMany(models.Admision, { foreignKey: 'id_usuario', as: 'admisiones' });
  Usuario.hasMany(models.HistorialMedico, { foreignKey: 'id_usuario', as: 'historiales' });
};
return Usuario;
};