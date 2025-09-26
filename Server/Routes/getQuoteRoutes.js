const express = require("express");
const router = express.Router();
// const multer = require("multer");
const upload = require("../middleware/upload");
const { getQuote, getAllQuotes } = require("../Controllers/getQuoteController");
const GetQuote = require("../Models/Quote");

// // Multer setup for serverless
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const uploadPath = "/tmp/uploads";
//     const fs = require("fs");
//     if (!fs.existsSync(uploadPath)) {
//       fs.mkdirSync(uploadPath, { recursive: true });
//     }
//     cb(null, uploadPath);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

const upload = multer({ storage });

router.post("/get-quote", upload.single("Document"), getQuote);
router.get("/get-quote", getAllQuotes);
router.patch("/get-quote/:id/read", async (req, res) => {
  try {
    const updated = await GetQuote.findByIdAndUpdate(
      req.params.id,
      { status: "read" },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating status" });
  }
});

module.exports = router;
