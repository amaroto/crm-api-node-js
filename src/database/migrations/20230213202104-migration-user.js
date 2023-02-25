"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.DataTypes.UUID,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      firstname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      lastname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("users");
  },
};
