var express = require("express");
var app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const Database = require("./database/database");
var session = require("express-session");
const fileUpload = require("express-fileupload");

var admin = require("./router/admin.router");
var teacher = require("./router/teacher.router");
var parent = require("./router/parent.router");
var student = require("./router/student.router");

app.use(
  cors({
    credentials: true, // This allows cookies to be sent
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
Database();
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(fileUpload());
app.use(express.static("public"));

app.use("/admin", admin);
app.use("/teacher", teacher);
app.use("/parent", parent);
app.use("/student", student);

app.listen(4000);
