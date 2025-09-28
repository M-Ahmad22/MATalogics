// config/cloudinary.js
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // your cloud name
  api_key: process.env.CLOUDINARY_API_KEY, // your api key
  api_secret: process.env.CLOUDINARY_API_SECRET, // your api secret
  secure: true,
});

module.exports = cloudinary;
