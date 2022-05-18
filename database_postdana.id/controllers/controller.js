const db = require("../models/index");
const axios = require("axios");
const fs = require("fs");
const convert = require("xml-js");
const url = "https://pasardana.id/rss?full=full";
const shortUrl = "https://pasardana.id/rss";
const News = db.news;
const Op = db.Sequelize.Op;

// Seeding
exports.seed = (req, res) => {
  // Initiation
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
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      News.bulkCreate(data).then((result) => {
        console.log(result);
      });
    });
  // Compare to Latest Data
  // Save To Database
};

// Find All News
exports.findAllNews = (req, res) => {
  News.findAll()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Find One News
exports.findOne = (req, res) => {};

// Find All Research
exports.findAllResearch = (req, res) => {};
