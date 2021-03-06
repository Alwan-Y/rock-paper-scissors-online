'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Room', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true,
      },
      player1Username: {
        type: Sequelize.STRING,
      },
      player2Username: {
        type: Sequelize.STRING,
      },
      player1Choice: {
        type: Sequelize.STRING,
      },
      player2Choice: {
        type: Sequelize.STRING,
      },
      result: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Room')
  },
}
