const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  userId: String,
  type: String,
  duration: Number,
  calories: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Workout", workoutSchema);