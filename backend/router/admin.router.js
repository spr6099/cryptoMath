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
router.post("/student_profile", adminController.student_profile);

router.get("/selectTeacher", adminController.selectTeacher);

router.get("/viewParents", adminController.viewParents);
router.post("/allocate_teacher", adminController.allocate_teacher);
router.post("/viewTeacher_students", adminController.viewTeacher_students);
module.exports = router;
