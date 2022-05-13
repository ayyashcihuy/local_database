class Controller {
  static getData(req, res, next) {
    res.status(200).json({
      message: "Data Seluruh Berita",
    });
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
