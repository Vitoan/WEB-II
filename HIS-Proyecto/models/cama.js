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
    id_cama: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_habitacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('libre', 'ocupada', 'en_limpieza'),
      allowNull: false,
      defaultValue: 'libre'
    },
    sexo_ocupante: {
      type: DataTypes.ENUM('M', 'F'),
      defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'Cama',
    tableName: 'camas',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  Cama.associate = function(models) {
  Cama.belongsTo(models.Habitacion, { foreignKey: 'id_habitacion', as: 'habitacion' });
  Cama.hasOne(models.Admision, { foreignKey: 'id_cama', as: 'admision' });
};
return Cama;
};