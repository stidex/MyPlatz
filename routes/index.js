const router = require("express").Router();
const user = require("../apiServices/user/routes");
const login = require("../services/login");
const course = require("../apiServices/course/routes");
const car = require("../apiServices/carAdd/routes");

router.use("/user", user);
router.use("/course", course);
router.use("/login", login);
router.use("/car", car);
module.exports = router;
