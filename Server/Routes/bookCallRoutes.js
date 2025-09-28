const express = require("express");
const router = express.Router();
const {
  bookCall,
  getAllBookings,
} = require("../Controllers/bookCallController");
const BookCall = require("../Models/BookCall");

// Create a new booking
router.post("/book-call", bookCall);

// Get all bookings
router.get("/book-call", getAllBookings);

// Mark booking as read
router.patch("/book-call/:id/read", async (req, res) => {
  try {
    const updated = await BookCall.findByIdAndUpdate(
      req.params.id,
      { status: "read" },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Booking not found" });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating status" });
  }
});

module.exports = router;
