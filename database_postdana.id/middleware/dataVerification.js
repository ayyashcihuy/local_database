const { News } = require("../models");
const axios = require("axios");
const convert = require("xml-js");
const url = "https://pasardana.id/rss?full=full";

function getData(req, res, next) {
  let data = [];
  let finalData = [];
  axios({
    method: "get",
    url,
  })
    .then((response) => {
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
          tag: tag.join(),
        };
        finalData.push(newsData);
        return e;
      });
      data = finalData;
      req.news = data;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
}

function compareData(req, res, next) {
  const firstData = req.news;
  News.findAll()
    .then((data) => {
      let compare = [];
      let result = [];
      data.map((e) => {
        compare.push(e.idnews);
        return e;
      });
      for (let x = 0; x < compare.length; x++) {
        for (let y = 0; y < firstData.length; y++) {
          if (compare[x] == firstData[y].idnews) {
            result.push(firstData[y]);
          }
        }
      }
      req.data = {
        result,
        length: result.length,
      };
      next();
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { getData, compareData };