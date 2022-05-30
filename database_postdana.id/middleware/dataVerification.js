const { News } = require("../models");
const striptags = require("striptags");
const axios = require("axios");
const convert = require("xml-js");
const { response } = require("express");
const url = "https://pasardana.id/rss?full=full";
const shortUrl = "https://pasardana.id/rss";

function getData(req, res, next) {
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
        e.description = e.description._text;
        e.description = e.description
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, `"`);
        const news = e.description;
        const date = new Date(e.pubDate._text);
        let image = e["media:content"]._attributes.url;
        image = image.replace(/&width=175&height=125/g, "");
        let tags = e.category;
        let tag = [];
        if (tags) {
          tags.map((x) => {
            tag.push(x._text);
          });
        }
        let newsData = {
          idnews: e.guid._text,
          title: e.title,
          link: e.link,
          news,
          image,
          date: date.toLocaleString("en"),
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

function filterData(req, res, next) {
  const firstData = req.news;
  News.findAll()
    .then((data) => {
      let compare = [];
      let result;
      data.map((e) => {
        compare.push(e.idnews);
        return e;
      });
      for (let x = 0; x < compare.length; x++) {
        for (let y = 0; y < firstData.length; y++) {
          if (firstData[y].idnews == compare[x]) {
            firstData.splice(y, 1);
          }
        }
      }
      req.data = {
        firstData,
        length: firstData.length,
      };
      next();
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { getData, filterData };
