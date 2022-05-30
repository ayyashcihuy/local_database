const axios = require("axios");
const port = process.env.PORT || 8082;

function seedingData() {
  setInterval(() => {
    axios
      .post(`http://localhost:${port}/api/seed`)
      .then(() => {
        console.log("Api Hited!");
      })
      .catch((err) => {
        console.log("Something went Wrong");
      });
  }, 360000);
  return;
}

module.exports = seedingData;
