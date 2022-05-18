const { News } = require("../models");

class Controller {
  static create(req, res, next) {
    // res.status(201).json(req.data);
    if (req.data.length === 0) {
      const news = req.news;
      News.bulkCreate(news)
        .then((data) => {
          res.status(201).json(data);
        })
        .catch((err) => {
          res.status(500).json({
            message: "Error!",
          });
        });
    } else {
      console.log("anjay");
    }
    // Compare to Latest Data
    // Save To Database
  }

  //   static create(req, res) {
  //     if (!req.body.title) {
  //       res.status(400).send({
  //         message: "Content cannot be empty!",
  //       });
  //       return;
  //     }

  //     const news = {
  //       idnews: req.body.idnews,
  //       title: req.body.title,
  //       news: req.body.news,
  //       date: req.body.date,
  //       tag: req.body.tag,
  //       image: req.body.image,
  //       link: req.body.link,
  //     };

  //     News.create(news)
  //       .then((data) => {
  //         res.status(201).json(data);
  //       })
  //       .catch((err) => {
  //         res.status(500).json({
  //           message: err.message,
  //         });
  //       });
  //   }

  static getNewsData(req, res) {
    News.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(404).json({
          message: err.message,
        });
      });
  }
}

module.exports = Controller;
