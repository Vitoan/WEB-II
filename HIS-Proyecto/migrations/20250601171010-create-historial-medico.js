'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HistorialMedicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_paciente: {
        type: Sequelize.INTEGER
      },
      id_admision: {
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER
      },
      alergias: {
        type: Sequelize.TEXT
      },
      medicamentos: {
        type: Sequelize.TEXT
      },
      antecedentes: {
        type: Sequelize.TEXT
      },
      sintomas: {
        type: Sequelize.TEXT
      },
      signos_vitales: {
        type: Sequelize.JSON
      },
      plan_cuidados: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HistorialMedicos');
  }
};