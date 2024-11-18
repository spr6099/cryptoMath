var express = require("express");
var router = express.Router();
var adminController = require("../controller/admin.controller");

router.post("/login", adminController.login);
router.post("/teacher", adminController.teacher);
router.get("/viewTeacher", adminController.viewTeacher);
router.post("/teacher_profile", adminController.teacher_profile);

router.post("/deleteTeacher", adminController.deleteTeacher);
router.post("/editTeacher", adminController.editTeacher);
router.post("/updateTeacher", adminController.updateTeacher);
router.get("/viewStudents", adminController.viewStudents);
router.get("/viewParents", adminController.viewParents);

module.exports = router;
