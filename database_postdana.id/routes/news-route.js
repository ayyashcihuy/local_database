const Controller = require("../controller/news-controller");
const { getData, compareData } = require("../middleware/dataVerification");

const router = require("express").Router();

router.get("/", Controller.getNewsData);
router.post("/", getData, compareData, Controller.create);

module.exports = router;
