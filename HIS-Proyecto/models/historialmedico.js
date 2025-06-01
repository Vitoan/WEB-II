'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistorialMedico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HistorialMedico.init({
    id_paciente: DataTypes.INTEGER,
    id_admision: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    alergias: DataTypes.TEXT,
    medicamentos: DataTypes.TEXT,
    antecedentes: DataTypes.TEXT,
    sintomas: DataTypes.TEXT,
    signos_vitales: DataTypes.JSON,
    plan_cuidados: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'HistorialMedico',
  });
  return HistorialMedico;
};