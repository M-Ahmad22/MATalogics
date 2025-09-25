const multer = require("multer");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const uploadDir = process.env.UPLOAD_DIR;
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + "-" + file.fieldname + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

module.exports = upload;
