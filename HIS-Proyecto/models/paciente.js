'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {}
  Paciente.init({
    id_paciente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sexo: {
      type: DataTypes.ENUM('M', 'F'),
      allowNull: false
    },
    direccion: DataTypes.STRING(100),
    telefono: DataTypes.STRING(20),
    contacto_emergencia: DataTypes.STRING(100),
    seguro_medico: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'Paciente',
    tableName: 'pacientes',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  Paciente.associate = function(models) {
  Paciente.hasMany(models.Admision, { foreignKey: 'id_paciente', as: 'admisiones' });
  Paciente.hasMany(models.HistorialMedico, { foreignKey: 'id_paciente', as: 'historiales' });
};
  return Paciente;
};