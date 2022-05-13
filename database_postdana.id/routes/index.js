const Controller = require("../controllers/controller");

require("dotenv").config();

const router = require("express").Router();

router.get("/", Controller.getData);
router.get("/:id", Controller.getDataById);
// const axios = require("axios");
// const fs = require("fs");
// const convert = require("xml-js");

// axios({
//   method: "get",
//   url: "https://pasardana.id/rss?full=full",
// }).then((response) => {
//   router.get("/", (req, res) => {
//     const result = JSON.parse(
//       convert.xml2json(response.data, { compact: true, spaces: 4 })
//     );
//     let data = result.rss.channel.item;
//     data.map((e) => {
//       e.title = e.title._text.replace(/^\s+|\s+$/g, "");
//       e.link = e.link._text;
//       e.description = e.description._text.replace(/^\s+|\s+$/g, "");
//       e.description = e.description.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
//       console.log(e["media:content"]);
//       const shortDesc = e.description.substr(0, 100);
//       e = {
//         title: e.title,
//         description: shortDesc,
//         news: e.description,
//       };
//       return e;
//     });
//     // res.send(title.replace(/^\s+|\s+$/g, ""));
//     res.send(data);
//   });
// });

module.exports = router;
