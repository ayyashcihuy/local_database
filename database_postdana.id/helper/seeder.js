const axios = require("axios");

function seedingData() {
  setInterval(() => {
    axios
      .post("http://localhost:8080/api/seed")
      .then(() => {
        console.log("Api Hited!");
      })
      .catch((err) => {
        console.log("Something went Wrong");
      });
  }, 3600000);
  return;
}

module.exports = seedingData;
