const Controller = require("../controllers/controller");
const router = require("express").Router();

router.post("/", Controller.seed);
router.get("/", Controller.findAllNews);

//

module.exports = router;
