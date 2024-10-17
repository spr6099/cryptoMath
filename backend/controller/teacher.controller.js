const { teacherRegDb, TeacherLogin } = require("../model/admin.model");

exports.login = async (req, res) => {
  let loginData = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    let data = await TeacherLogin.findOne({ email: loginData.email });
    if (data) {
      if (data.password == loginData.password) {
        req.session.teacher = data;
        let teacher = req.session.teacher;
        res.json(teacher);
      } else {
        res.json("incorrect Password");
        console.log("incorrect Password");
      }
    } else {
      res.json("incorrect User");
      console.log("Incorrect User");
    }
    console.log("teacherq", data);
  } catch (err) {
    console.log(err);
  }
};
