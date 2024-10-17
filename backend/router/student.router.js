var express = require("express");
var router = express.Router();
var student = require("../controller/student.controller");

router.post("/login", student.login);

module.exports = router;
