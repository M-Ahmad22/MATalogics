const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    Email: { type: String, required: true },
    PhoneNo: { type: String, required: true },
    startUpName: { type: String },
    service: { type: String },
    budget: { type: String },
    projectTimeline: { type: String },
    projectDescription: { type: String },
    document: { type: String }, // store file path
    status: {
      type: String,
      enum: ["unread", "read"],
      default: "unread",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);
