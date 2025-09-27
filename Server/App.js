const express = require("express");
const connectDB = require("./db");

const app = express();
(async () => {
  try {
    await connectDB();
  } catch (err) {
    console.error(err);
  }
})();

app.get("/", (req, res) => res.send("Hello from Render"));

module.exports = app;
