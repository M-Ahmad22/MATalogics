const express = require("express");
const connectDB = require("./db");

const app = express();

// Middlewares
app.use(express.json());

// Connect DB on cold start
connectDB().then(() => console.log("MongoDB connected"));

// Routes
app.use("/api/applications", require("./Routes/applicationRoutes"));
// ...other routes

// Optional: Root endpoint
app.get("/", (req, res) => {
  res.send("Backend API is running.");
});

module.exports = app;
