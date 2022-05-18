const axios = require("axios");
const fs = require("fs");
const convert = require("xml-js");
const db = require("../config/database");
const url = "https://pasardana.id/rss?full=full";
const shortUrl = "https://pasardana.id/rss";

function getData() {
  let finalData = [];
  axios({
    method: "get",
    url,
  }).then((response) => {
    const result = JSON.parse(
      convert.xml2json(response.data, { compact: true, spaces: 4 })
    );
    let data = result.rss.channel.item;
    data.map((e) => {
      e.title = e.title._text.replace(/^\s+|\s+$/g, "");
      e.link = e.link._text;
      e.description = e.description._text.replace(/^\s+|\s+$/g, "");
      e.description = e.description.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      const date = new Date(e.pubDate._text);
      let tags = e.category;
      let tag = [];
      if (tags) {
        tags.map((x) => {
          // console.log(x, "+++");
          tag.push(x._text);
        });
      }

      let options = {
        year: "numeric",
        month: "2-digit",
        day: "numeric",
      };

      let newsData = {
        idnews: e.guid._text,
        title: e.title,
        link: e.link,
        news: e.description,
        image: e["media:content"]._attributes.url,
        date: date.toLocaleString("en", options),
        tag,
      };

      finalData.push(newsData);
      // return e;
    });
    return finalData;
  });
}

module.exports = { getData };
