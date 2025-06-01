'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cama extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cama.init({
    id_habitacion: DataTypes.INTEGER,
    estado: DataTypes.ENUM,
    sexo_ocupante: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Cama',
  });
  return Cama;
};