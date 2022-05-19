const { getPagination, getPagingData } = require("../helper/pagination");
const db = require("../models");
const { News } = require("../models");
const Op = db.Sequelize.Op;

class Controller {
  static create(req, res, next) {
    const news = req.data.firstData;
    News.bulkCreate(news)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error!",
        });
      });
  }

  static getData(req, res) {
    const { page, size, title } = req.query;
    let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    const { limit, offset } = getPagination(page, size);
    News.findAndCountAll({ where: condition, limit, offset })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(404).json({
          message: err.message,
        });
      });
  }

  static getNewsData(req, res) {
    const { page, size } = req.query;
    let condition = { tag: { [Op.notLike]: `%analisa%` } };
    const { limit, offset } = getPagination(page, size);
    News.findAndCountAll({ where: condition, limit, offset })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(404).json({
          message: err.message,
        });
      });
  }

  static getResearchData(req, res) {
    const { page, size } = req.query;
    let condition = { tag: { [Op.like]: `%analisa%` } };
    const { limit, offset } = getPagination(page, size);
    News.findAndCountAll({ where: condition, limit, offset })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(404).json({
          message: err.message,
        });
      });
  }

  static getDataById(req, res) {
    const idnews = req.params.id;
    News.findAll({
      where: {
        idnews,
      },
    })
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
