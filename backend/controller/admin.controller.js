const { teacherRegDb, loginDb } = require("../model/admin.model");

exports.login = async (req, res) => {
  let logindata = {
    name: req.body.name,
    password: req.body.password,
  };
  try {
    let data = await loginDb.findOne({ name: logindata.name });
    if (data) {
      if (data.password == logindata.password) {
        req.session.admin = data;
        // res.json(data);
        res.json("success");
      } else {
        res.json(" password");
      }
    } else {
      res.json("incorrect username ");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.teacher = async (req, res) => {
  let datas = {
    name: req.body.name,
    dob: req.body.dob,
    email: req.body.email,
    subject: req.body.subject,
    image: req.files.image.name,
    address: req.body.address,
    country: req.body.country,
    number: req.body.number,
  };
  try {
    let fileup = req.files.image;
    await fileup.mv("public/teacher/" + datas.image);
    await teacherRegDb.create(datas);
    res.json("success")
  } catch (err) {}
};

exports.viewTeacher = async (req, res) => {
  try {
    let data = await teacherRegDb.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};
