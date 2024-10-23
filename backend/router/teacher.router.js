var express = require("express");
var router = express.Router();
var teacher = require("../controller/teacher.controller");
// const { joiValidator } = require("./middlewares/joiValidator");
// const Joi = require("joi");

// router.post(
//   "/login",
//   joiValidator(
//     Joi.object({
//       name: Joi.string().uppercase().required(),
//       email: Joi.string().email().required(),
//       //password must contain uper lower case
//       password: Joi.string()
//         .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z]).{1,10}$"))
//         .required(),
//     })
//   ),
//   teacher.login
// );

router.post("/login", teacher.login);
module.exports = router;
