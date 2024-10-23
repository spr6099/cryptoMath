var mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  house: { type: String, required: true },
  hnumber: { type: String, required: true },
  street: { type: String, required: true },
  village: { type: String, required: true },
  post: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  address: { type: String, required: true },
  pin: { type: String, required: true },
  image: { type: String, required: true },

  createdAt: { type: Date, default: Date.now() },
});

const loginSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  parentRegID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "parent_registers",
  },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const student_regSchema = mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  relation: { type: String, required: true },
  pin: { type: String, required: true },
  course: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const student_loginSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  studentRegID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student_registers",
  },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const student_register = mongoose.model("student_registers", student_regSchema);
const student_login = mongoose.model("student_logins", student_loginSchema);
const ParentLogin = mongoose.model("parent_logins", loginSchema);
const ParentReg = mongoose.model("parent_registers", registerSchema);

module.exports = { ParentLogin, ParentReg, student_register, student_login };
