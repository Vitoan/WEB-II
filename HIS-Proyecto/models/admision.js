'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admision extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admision.init({
    id_paciente: DataTypes.INTEGER,
    id_cama: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    fecha_admision: DataTypes.DATE,
    motivo: DataTypes.TEXT,
    estado: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Admision',
  });
  return Admision;
};