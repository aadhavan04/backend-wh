require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const workoutRoutes = require("./routes/workout");

const app = express();
const dns = require('dns');
dns.setServers([
  '8.8.8.8',
  '8.8.4.4'
]);
dns.setDefaultResultOrder('ipv4first');

// Middleware
app.use(cors());
app.use(express.json());

// Root test
app.get("/", (req, res) => {
  res.send("API Working");
});

//dd
app.get("/test", (req, res) => {
  console.log("TEST ROUTE HIT");
  res.send("TEST OK");
});
// Debug test
app.post("/test", (req, res) => {
  res.send("TEST OK");
});

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/workout", workoutRoutes);

// MongoDB connection (LOCAL)
mongoose.connect("mongodb+srv://aadhavan142_db_user:Prb6mRfvJLfB5zOC@cluster0.7adsnlp.mongodb.net")
  .then(() => {
    console.log("MongoDB connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.log("DB ERROR:", err);
  });