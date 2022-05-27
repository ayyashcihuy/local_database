const Controller = require("../controller/news-controller");
const { getData, filterData } = require("../middleware/dataVerification");

const router = require("express").Router();

router.get("/research", Controller.getResearchData);
router.get("/news", Controller.getNewsData);
router.get("/:id", Controller.getDataById);
router.get("/", Controller.getData);
router.post("/seed", getData, filterData, Controller.create);

module.exports = router;
