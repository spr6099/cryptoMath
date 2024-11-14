var mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
  id: { type: String, required: true },
  score: { type: String, required: true },
  game: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const game_score = mongoose.model("game_scores", scoreSchema);
module.exports = { game_score };