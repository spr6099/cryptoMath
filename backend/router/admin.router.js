var express = require("express");
var router = express.Router();
var adminController = require("../controller/admin.controller");

router.post("/login", adminController.login);
router.post("/teacher", adminController.teacher);
router.get(
    "/viewTeacher",
    (req, res, next) => {
        console.log(req.session.user);
        next();
    },
    adminController.viewTeacher
);
router.post("/deleteTeacher", adminController.deleteTeacher);
router.post("/editTeacher", adminController.editTeacher);
router.post("/updateTeacher", adminController.updateTeacher);
router.get("/viewStudents", adminController.viewStudents);
router.get("/viewParents", adminController.viewParents);

module.exports = router;
