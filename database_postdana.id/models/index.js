const dbconfig = require("../config/database.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbconfig.max,
    min: dbconfig.min,
    acquire: dbconfig.acquire,
    idle: dbconfig.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// db.news = require("./model")(sequelize, Sequelize);
module.exports = db;
