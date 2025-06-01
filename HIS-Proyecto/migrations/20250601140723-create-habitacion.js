'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Habitacions', {
      id_habitacion: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_ala: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Alas', // Assuming the table name is 'Alas'
          key: 'id_ala'
        },
        onDelete: 'RESTRICT',

      },
      tipo: {
        type: Sequelize.ENUM('1_cama', '2_camas'),
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING(10),
        allowNull: false,
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
    await queryInterface.dropTable('Habitacions');
  }
};