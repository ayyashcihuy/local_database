const router = require("./routes/news-route");
const express = require("express");
const cors = require("cors");
const app = express();
let corsOptions = {
  origin: "http://172.31.166.136:8000",
  origin: "http://localhost:8000",
};
const seedingData = require("./helper/seeder");

seedingData();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port:http://localhost:${PORT}`);
});
