var express = require("express");
var router = express.Router();
var parent = require("../controller/parent.controller");

router.post("/parentRegister", parent.parentRegister);
router.post("/login", parent.login);
router.post("/studentRegister", parent.studentRegister);
router.post("/view_student_details", parent.view_student_details);
router.post("/view_student", parent.view_student);

module.exports = router;
