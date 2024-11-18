const {
  ParentReg,
  ParentLogin,
  student_register,
  student_login,
} = require("../model/parents.model");

exports.parentRegister = async (req, res) => {
  try {
    let register_datas = {
      name: req.body.name,
      phone: req.body.phone,
      house: req.body.house,
      hnumber: req.body.hnumber,
      street: req.body.street,
      village: req.body.village,
      post: req.body.post,
      district: req.body.district,
      state: req.body.state,
      address: req.body.address,
      pin: req.body.pin,
      image: req.files.image.name,
    };

    // console.log("jnkm m ", register_datas);
    let fileup = req.files.image;
    await fileup.mv("public/parents/" + register_datas.image);
    let ParentRegister = await ParentReg.create(register_datas);

    let login_datas = {
      email: req.body.email,
      password: req.body.password,
      status: "parent",
      parentRegID: ParentRegister._id,
    };
    await ParentLogin.create(login_datas);
    res.json("success");
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    let loginData = {
      email: req.body.email,
      password: req.body.password,
    };
    let data = await ParentLogin.findOne({ email: loginData.email });
    if (data) {
      if (data.password == loginData.password) {
        req.session.parents = data;
        let parents = req.session.parents;
        res.json(parents);
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

exports.studentRegister = async (req, res) => {
  console.log(req.body);
  
  try {
    let register_datas = {
      name: req.body.name,
      dob: req.body.dob,
      relation: req.body.relation,
      gender: req.body.gender,
      pin: req.body.pin,
      image: req.files.image.name,
      course: req.body.course,
      email: req.body.email,
      password: req.body.password,
    };

    // console.log(register_datas);
    let fileup = req.files.image;
    await fileup.mv("public/students/" + register_datas.image);
    let studentRegister = await student_register.create(register_datas);

    let login_datas = {
      email: req.body.email,
      password: req.body.password,
      status: "student",
      studentRegID: studentRegister._id,
      parent_id: req.body.parent_id,
    };
    await student_login.create(login_datas);
    res.json("success");
  } catch (err) {
    console.log(err);
  }
};

exports.view_student_details = async (req, res) => {
  try {
    let data = await student_login
      .find({ parent_id: req.body.parent_id })
      .populate("studentRegID");

    res.json(data);
  } catch (err) {
    console.log(err);
  }
};
