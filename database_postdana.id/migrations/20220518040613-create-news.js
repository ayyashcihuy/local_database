"use strict";
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable("News", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idnews: {
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING(1000),
      },
      news: {
        type: Sequelize.TEXT,
      },
      date: {
        type: Sequelize.DATE,
      },
      tag: {
        type: Sequelize.STRING(1000),
      },
      image: {
        type: Sequelize.TEXT,
      },
      link: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable("News");
  },
};
