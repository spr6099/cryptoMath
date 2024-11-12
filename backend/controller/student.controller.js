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
        req.session.student = data;
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
    score: req.body.score,
    id: req.body.id,
    game: req.body.game,
  };
  try {
    const result = await game_score.findOne({ id: req.body.id });
    if (result) {
      let SnakeScore = await game_score.findOneAndUpdate(
        { id: req.body.id },
        { score: req.body.score, game: req.body.game }
      );
    } else {
      await game_score.create(datas);
    }

    res.json("scoreSaved");
  } catch (err) {
    console.log(err);
  }
};

exports.getScore = async (req, res) => {
  let id = req.body.id;

  try {
    const result = await game_score.findOne({ id: id, game: req.body.game });
    res.json(result)
  } catch (err) {
    console.log(err);
  }
};
