var express = require("express");
var router = express.Router();
var adminController = require("../controller/admin.controller");

router.post("/login", adminController.login);
router.post("/teacher", adminController.teacher);
router.get("/viewTeacher", adminController.viewTeacher);
module.exports = router;
