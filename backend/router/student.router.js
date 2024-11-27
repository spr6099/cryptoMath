var express = require("express");
var router = express.Router();
var student = require("../controller/student.controller");

router.post("/login", student.login);
router.post("/score", student.score);
router.post("/getScore", student.getScore);

router.post("/getGuessScore", student.getGuessScore);
router.post("/getSnakeScore", student.getSnakeScore);
router.post("/getFruitScore", student.getFruitScore);
router.post("/getTypingScore", student.getTypingScore);

module.exports = router;
