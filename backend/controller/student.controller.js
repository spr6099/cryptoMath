const { student_login } = require("../model/parents.model");
const { game_score } = require("../model/students.model");

exports.login = async (req, res) => {
  try {
    let loginData = {
      email: req.body.email,
      password: req.body.password,
    };
    let data = await student_login.findOne({ email: loginData.email });
    if (data) {
      if (data.password == loginData.password) {
        req.session.user = data;
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

exports.score = async (req, res) => {
  let datas = {
    // HighScore: req.body.Hscore,
    score: req.body.score,
    user: req.body.user,
    game: req.body.game,
  };
  console.log("datas", datas);

  try {
    const result = await game_score.create(datas);

    res.json("scoreSaved");
  } catch (err) {
    console.log(err);
  }
};

exports.getScore = async (req, res) => {
  // console.log("aa", req.body.id);

  try {
    let data = await game_score.find();
    res.json(data);
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
};

exports.getGuessScore = async (req, res) => {
  // console.log("aa", req.body.id);

  try {
    let data = await game_score.find({ user: req.body.id, game: "guess" });
    res.json(data);
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
};

exports.getSnakeScore = async (req, res) => {
  // console.log("aa", req.body.id);

  try {
    let data = await game_score.find({ user: req.body.id, game: "snake" });
    res.json(data);
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
};
exports.getTypingScore = async (req, res) => {
  // console.log("aa", req.body.id);

  try {
    let data = await game_score.find({ user: req.body.id, game: "typing" });
    res.json(data);
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
};

exports.getFruitScore = async (req, res) => {
  // console.log("aa", req.body.id);

  try {
    let data = await game_score.find({ user: req.body.id, game: "fruit" });
    res.json(data);
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
};
