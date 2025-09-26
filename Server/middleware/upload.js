const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Use /tmp/uploads for serverless
const uploadPath = "/tmp/uploads";

// Ensure /tmp/uploads exists
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
module.exports = upload;
