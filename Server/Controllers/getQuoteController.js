const Quote = require("../Models/Quote");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

// Create new quote
const getQuote = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phoneNo,
      startUpName,
      service,
      budget,
      projectTimeline,
      projectDescription,
    } = req.body;

    let documentUrl = null;

    // Helper function to upload buffer to Cloudinary
    const uploadToCloudinary = (fileBuffer, folder = "quotes") =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "auto", folder },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        );
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });

    // Upload file if provided
    if (req.file) {
      documentUrl = await uploadToCloudinary(req.file.buffer);
    }

    const newQuote = new Quote({
      fullName,
      email,
      phoneNo,
      startUpName,
      service,
      budget,
      projectTimeline,
      projectDescription,
      document: documentUrl,
    });

    await newQuote.save();
    res.status(200).json({ message: "Quote request submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all quotes
const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getQuote, getAllQuotes };
