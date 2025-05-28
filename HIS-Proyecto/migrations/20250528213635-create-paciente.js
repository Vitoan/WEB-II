'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pacientes', {
      id_paciente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      apellido: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      dni: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      fecha_nacimiento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      sexo: {
        type: Sequelize.ENUM('M', 'F'),
        allowNull: false
      },
      direccion: Sequelize.STRING(100),
      telefono: Sequelize.STRING(20),
      contacto_emergencia: Sequelize.STRING(100),
      seguro_medico: Sequelize.STRING(50),
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
    await queryInterface.addIndex('pacientes', ['dni']);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pacientes');
  }
};