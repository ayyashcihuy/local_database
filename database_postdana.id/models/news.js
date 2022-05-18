const { Sequelize, Datatypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const News = sequelize.define(
  "News",
  {
    idNews: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: Datatypes.STRING,
    },
    news: {
      type: Datatypes.TEXT,
    },
    date: {
      type: Datatypes.DATE,
    },
    tag: {
      type: Datatypes.STRING,
    },
    image: {
      type: Datatypes.TEXT,
    },
    link: {
      type: Datatypes.TEXT,
    },
  },
  {}
);

console.log(News === sequelize.models.News);
