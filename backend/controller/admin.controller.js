const { teacherRegDb, TeacherLogin } = require("../model/admin.model");
const { student_login, ParentLogin } = require("../model/parents.model");

exports.login = async (req, res) => {
  let logindata = {
    name: req.body.name,
    password: req.body.password,
  };
  try {
    // let data = await loginDb.findOne({ name: logindata.name });
    if (logindata.name == "admin") {
      if (logindata.password == "123") {
        req.session.admin = logindata;
        let data = req.session.admin;
        res.json(data);
      } else {
        res.json(" invalid password ");
      }
    } else {
      res.json("invalid userName ");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.teacher = async (req, res) => {
  try {
    let datas = {
      name: req.body.name,
      dob: req.body.dob,
      subject: req.body.subject,
      image: req.files.image.name,
      address: req.body.address,
      number: req.body.number,
      gender: req.body.gender,
    };
    let fileup = req.files.image;
    await fileup.mv("public/teacher/" + datas.image);
    let TRegister = await teacherRegDb.create(datas);

    let loginData = {
      email: req.body.email,
      password: req.body.password,
      status: "teacher",
      regId: TRegister._id,
    };

    await TeacherLogin.create(loginData);

    res.json("success");
  } catch (err) {
    console.log(err);
  }
};

exports.viewTeacher = async (req, res) => {
  try {
    let data = await TeacherLogin.find().populate("regId");
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteTeacher = async (req, res) => {
  let id = req.body.id;
  try {
    await teacherRegDb.findByIdAndDelete(id);
    res.json("deleted");
  } catch (err) {
    console.log(err);
  }
};

exports.editTeacher = async (req, res) => {
  let id = req.body.id;
  try {
    // console.log("zz",id);

    let data = await teacherRegDb.findById(id);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

exports.updateTeacher = async (req, res) => {
  let datas = "";
  // console.log("datas", datas);

  if (req.files?.image) {
    datas = {
      name: req.body.name,
      dob: req.body.dob,
      email: req.body.email,
      subject: req.body.subject,
      image: req.files.image.name,
      address: req.body.address,
      password: req.body.password,
      number: req.body.number,
      gender: req.body.gender,
    };
    const fileUp = req.files.image;
    fileUp.mv("public/teacher/" + datas.image);
  } else {
    datas = {
      name: req.body.name,
      dob: req.body.dob,
      email: req.body.email,
      subject: req.body.subject,
      // image: req.files.image.name,
      address: req.body.address,
      password: req.body.password,
      number: req.body.number,
      gender: req.body.gender,
    };
  }

  try {
    // let fileup = req.files.image;
    // await fileup.mv("public/teacher/" + datas.image);
    await teacherRegDb.findByIdAndUpdate(req.body.id, datas);
    res.json("success");
  } catch (err) {
    console.log(err);
  }
};

exports.viewParents = async (req, res) => {
  try {
    let data = await ParentLogin.find().populate("parentRegID");
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

exports.viewStudents = async (req, res) => {
  try {
    let data = await student_login.find().populate("studentRegID");
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};
