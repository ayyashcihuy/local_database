const router = require("./routes/news-route");
const express = require("express");
const cors = require("cors");
const {
  testLoop,
  getData,
  compareData,
} = require("./middleware/dataVerification");
const Controller = require("./controller/news-controller");
const app = express();
let corsOptions = {
  origin: "http://localhost:8000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

setInterval(() => {}, 1000);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port:http://localhost:${PORT}`);
});
