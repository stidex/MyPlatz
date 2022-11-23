const controller = require("./controller");
const router = require("@awaitjs/express").Router();

router.postAsync("/", controller.createCars);

module.exports = router;
