require("dotenv").config();
const router = require("./routes/news-route");
const express = require("express");
const cors = require("cors");
const app = express();
let corsOptions = {
  origin: "*",
};
const seedingData = require("./helper/seeder");

seedingData();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port:http://localhost:${PORT}`);
});
