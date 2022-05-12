const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  database: "postdana",
  user: "root",
  password: "123456",
});

module.exports = db;
