var express = require("express");
var router = express.Router();
var teacher = require("../controller/teacher.controller");

router.post("/login", teacher.login);

module.exports = router;
