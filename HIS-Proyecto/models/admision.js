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
  Admision.associate = function(models) {
  Admision.belongsTo(models.Paciente, { foreignKey: 'id_paciente', as: 'paciente' });
  Admision.belongsTo(models.Cama, { foreignKey: 'id_cama', as: 'cama' });
  Admision.belongsTo(models.Usuario, { foreignKey: 'id_usuario', as: 'usuario' });
  Admision.hasOne(models.HistorialMedico, { foreignKey: 'id_admision', as: 'historial' });
};
  return Admision;
};