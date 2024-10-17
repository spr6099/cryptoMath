var mongoose = require("mongoose");

// const login = mongoose.Schema({
//   name: { type: String, required: true },
//   password: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now() },
// });
// const loginDb = mongoose.model("admin", login);

const registerSchema = mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  subject: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  number: { type: Number, required: true },
  gender: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});
const teacherRegDb = mongoose.model("teacher_registers", registerSchema);

const loginSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  regId: { type: mongoose.Schema.Types.ObjectId, ref: "teacher_registers" },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const TeacherLogin = mongoose.model("teacher_logins", loginSchema);
module.exports = { teacherRegDb, TeacherLogin };
