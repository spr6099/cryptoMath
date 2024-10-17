const { student_login } = require("../model/parents.model");

exports.login = async (req, res) => {
    try {
      let loginData = {
        email: req.body.email,
        password: req.body.password,
      };
      let data = await student_login.findOne({ email: loginData.email });
      if (data) {
        if (data.password == loginData.password) {
          req.session.student = data;
          res.json(data);
        } else {
          res.json("incorrect Password");
          console.log("invalid Password");
        }
      } else {
        res.json("incorrect User");
        console.log("invalid password");
      }
    } catch (err) {
      console.log(err);
    }
  };
  