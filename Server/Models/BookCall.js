const mongoose = require("mongoose");

const BookCallSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    projectBrief: { type: String, required: true },
    selectedDate: { type: String, required: true }, // store as YYYY-MM-DD
    selectedTime: { type: String, required: true }, // e.g., "10:00 AM"
    timezone: { type: String, required: true },
    status: { type: String, enum: ["unread", "read"], default: "unread" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookCall", BookCallSchema);
