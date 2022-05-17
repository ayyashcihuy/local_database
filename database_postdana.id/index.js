const express = require("express");
const db = require("./config/database");
const router = require("./routes");
const port = process.env.PORT || 8000;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Server Error!",
  });
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");
});

app.use("/news", router);

app.listen(port, () => {
  console.log("Server Ready!");
});
