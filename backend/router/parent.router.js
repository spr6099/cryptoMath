var express = require("express");
var router = express.Router();
var parent = require("../controller/parent.controller");

router.post("/parentRegister", parent.parentRegister);
router.post("/login", parent.login);
router.post("/studentRegister", parent.studentRegister);
module.exports = router;
