'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Camas', {
      id_cama: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_habitacion: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Habitacions', // Assuming the table name is 'Habitacions'
          key: 'id_habitacion'
        },
        onDelete: 'RESTRICT',
      },
      estado: {
        type: Sequelize.ENUM('libre', 'ocupada', 'en_limpieza'),
        allowNull: false,
        defaultValue: 'libre'
      },
      sexo_ocupante: {
        type: Sequelize.ENUM('M', 'F'),
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Camas');
  }
};