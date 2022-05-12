const axios = require("axios");
const express = require("express");
const db = require("./config/database");
const fs = require("fs");
const convert = require("xml-js");
const port = 8000;

const app = express();

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");

  // Get Data From Server - Testing
  axios({
    method: "get",
    url: "https://pasardana.id/rss",
  }).then((response) => {
    app.get("/", (req, res) => {
      // console.log(response);
      const result = JSON.parse(
        convert.xml2json(response.data, { compact: true, spaces: 4 })
      );
      // const title = result.rss.channel.item[0].title._text;
      let data = result.rss.channel.item;
      data.map((e) => {
        e.title = e.title._text.replace(/^\s+|\s+$/g, "");
        e.link = e.link._text;
        e.description = e.description._text.replace(/^\s+|\s+$/g, "");
        return e;
      });
      // res.send(title.replace(/^\s+|\s+$/g, ""));
      res.send(data);
    });
  });
});

app.listen(port, () => {
  console.log("Server Ready!");
});
