const axios = require("axios");
const { response } = require("express");
const fs = require("fs");
const convert = require("xml-js");
const url = "https://pasardana.id/rss?full=full";
const shortUrl = "https://pasardana.id/rss";

class Model {
  static seedData() {
    let finalData;
    axios({
      method: "get",
      url: "https://pasardana.id/rss?full=full",
    }).then((response) => {
      const result = JSON.parse(
        convert.xml2json(response.data, { compact: true, spaces: 4 })
      );
      let data = result.rss.channel.item;
      data.map((e) => {
        e.title = e.title._text.replace(/^\s+|\s+$/g, "");
        e.link = e.link._text;
        e.description = e.description._text.replace(/^\s+|\s+$/g, "");
        e.description = e.description
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
        // console.log(e["media:content"]);
        const shortDesc = e.description.substr(0, 100);
        e = {
          title: e.title,
          description: shortDesc,
          news: e.description,
        };
        return e;
      });
      finalData = data;
      // res.send(title.replace(/^\s+|\s+$/g, ""));
    });
    return finalData;
  }

  static getData() {}

  static getDataById(id) {}

  static getDataByTag(tag) {}
}

module.exports = Model;
