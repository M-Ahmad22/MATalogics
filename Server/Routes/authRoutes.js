const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
} = require("../Controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Get all users (admin only)
router.get("/users", authMiddleware(["admin"]), getAllUsers);

// Delete user by ID (admin only)
router.delete("/users/:id", authMiddleware(["admin"]), deleteUser);

module.exports = router;
