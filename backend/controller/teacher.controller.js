const { teacherRegDb, TeacherLogin } = require("../model/admin.model");
const { student_login } = require("../model/parents.model");

exports.login = async (req, res) => {
  let loginData = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    let data = await TeacherLogin.findOne({ email: loginData.email });
    if (data) {
      if (data.password == loginData.password) {
        req.session.user = data;
        console.log(data);
        
        // let teacher = req.session.teacher;
        res.json(req.session.user);
      } else {
        res.json("incorrect Password");
        // console.log("incorrect Password");
      }
    } else {
      res.json("incorrect User");
      // console.log("Incorrect User");
    }
    // console.log("teacherq", data);
  } catch (err) {
    console.log(err);
  }
};


exports.students = async (req, res) => {
  console.log("ll",req.body.id);

  try {
    let data = await student_login
      .find({ teacher: req.body.id })
      .populate("studentRegID");
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

