const Model = require("../models/model");

class Controller {
  static getData(req, res, next) {
    const data = Model.getData();

    res.status(200).json({ data: data });
  }

  static getDataById(req, res, next) {
    const id = req.params.id;
    console.log(id);
    res.status(200).json({
      message: `Data Berita dengan ID:${id}`,
    });
  }
}

module.exports = Controller;
