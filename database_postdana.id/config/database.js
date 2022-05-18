module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123456",
  DB: "postdana",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   database: "postdana",
//   user: "root",
//   password: "123456",
// });

// module.exports = db;
