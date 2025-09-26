const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Destination function for serverless
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "/tmp/uploads";
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
