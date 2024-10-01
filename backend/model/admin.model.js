var mongoose = require("mongoose");

const login = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const loginDb = mongoose.model("login", login);

const teacher = mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  number: { type: Number, required: true },
});

const teacherRegDb = mongoose.model("teacher", teacher);
module.exports = { loginDb,teacherRegDb };
