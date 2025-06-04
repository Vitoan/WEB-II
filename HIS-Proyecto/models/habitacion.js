'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habitacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Habitacion.init({
    id_ala: DataTypes.INTEGER,
    tipo: DataTypes.ENUM,
    numero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Habitacion',
  });
  Habitacion.associate = function(models) {
  Habitacion.belongsTo(models.Ala, { foreignKey: 'id_ala', as: 'ala' });
  Habitacion.hasMany(models.Cama, { foreignKey: 'id_habitacion', as: 'camas' });
};
  return Habitacion;
};