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
    let teacher = await TeacherLogin.findById(id).populate("regId");
    // console.log("teacer", teacher);
    await teacherRegDb.findByIdAndDelete(teacher.regId._id);
    await TeacherLogin.findByIdAndDelete(id);
    res.json({ message: "Teacher deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An error occurred" });
  }
};

exports.editTeacher = async (req, res) => {
  let id = req.body.id;
  try {
    // console.log("zz",id);

    let data = await TeacherLogin.findById(id).populate("regId");
    console.log(data);

    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

exports.updateTeacher = async (req, res) => {
  console.log("loginid", req.body.id);

  // let logDb = await TeacherLogin.findById(req.body.id);
  // let regId = logDb.regId;
  // console.log("regId", regId);

  try {
    if (req.files?.image) {
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
      let TRegister = await teacherRegDb.findByIdAndUpdate(req.body.id, datas);
      let loginData = {
        email: req.body.email,
        password: req.body.password,
        status: "teacher",
        regId: TRegister._id,
      };
      await TeacherLogin.findOneAndUpdate({ regId: req.body.id }, loginData);
      res.json("success");
    } else {
      let datas = {
        name: req.body.name,
        dob: req.body.dob,
        subject: req.body.subject,
        address: req.body.address,
        number: req.body.number,
        gender: req.body.gender,
      };

      let TRegister = await teacherRegDb.findByIdAndUpdate(req.body.id, datas);
      let loginData = {
        email: req.body.email,
        password: req.body.password,
        status: "teacher",
        regId: TRegister._id,
      };
      await TeacherLogin.findOneAndUpdate({ regId: req.body.id }, loginData);
      res.json("success");
    }
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
