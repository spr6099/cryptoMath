var express = require("express");
var app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
var admin = require("./router/admin.router");
const Database = require("./database/database");
var session = require("express-session");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
Database();
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);
app.use(fileUpload());
app.use(express.static("public"));

app.use("/admin", admin);
app.listen(4000);
