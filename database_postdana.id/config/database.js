const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "172.31.2.90",
  database: "neoreksadana",
  user: "reksaadmin",
  password: "Bukapintu!0",
});

module.exports = db;
