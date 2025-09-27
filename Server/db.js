const express = require("express");
const connectDB = require("./db");

const router = express.Router();

router.get("/data", async (req, res) => {
  try {
    await connectDB(); // connect only when a request comes in
    // your DB logic here
    res.json({ message: "DB connected!" });
  } catch (err) {
    res.status(500).json({ error: "DB connection failed" });
  }
});

module.exports = router;
