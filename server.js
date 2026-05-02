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

// Test route
app.get("/test", (req, res) => {
  console.log("TEST ROUTE HIT");
  res.send("TEST OK");
});

app.post("/test", (req, res) => {
  res.send("TEST OK");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/workout", workoutRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    // PORT FIX
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB ERROR:", err);
  });