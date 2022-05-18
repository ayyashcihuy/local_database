const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "http://localhost:8000",
};
const db = require("./models");
const router = require("./routes");
const port = process.env.PORT || 8000;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db");
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Server Error!",
  });
});

app.use("/", router);

app.listen(port, () => {
  console.log("Server Ready!");
});
