const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");

// ADD WORKOUT
router.post("/add", async (req, res) => {
  try {
    const workout = new Workout(req.body);
    await workout.save();
    res.json(workout);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error saving workout" });
  }
});

// GET WORKOUTS
router.get("/:userId", async (req, res) => {
  try {
    const data = await Workout.find({ userId: req.params.userId });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching workouts" });
  }
});

module.exports = router; 