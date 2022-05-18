"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  News.init(
    {
      idnews: DataTypes.INTEGER,
      title: DataTypes.STRING(1000),
      news: DataTypes.TEXT,
      date: DataTypes.DATE,
      tag: DataTypes.STRING(1000),
      image: DataTypes.TEXT,
      link: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "News",
    }
  );
  return News;
};
