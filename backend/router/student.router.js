var express = require("express");
var router = express.Router();
var student = require("../controller/student.controller");

router.post("/login", student.login);
router.post("/score", student.score);
// router.post("/getScore", student.getScore);

module.exports = router;
