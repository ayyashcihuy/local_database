const Controller = require("../controllers/controller");

require("dotenv").config();

const router = require("express").Router();

router.get("/", Controller.getData);
router.get("/:id", Controller.getDataById);

//

module.exports = router;
