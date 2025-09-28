const Model = require("../Models/Application");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

// Create new submission
exports.create = async (req, res) => {
  try {
    const payload = req.body;
    const files = req.files;

    const uploadToCloudinary = (fileBuffer) =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "auto" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        );
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });

    if (files) {
      if (files.resume && files.resume[0]) {
        payload.resume = await uploadToCloudinary(files.resume[0].buffer);
      }
      if (files.coverLetter && files.coverLetter[0]) {
        payload.coverLetter = await uploadToCloudinary(
          files.coverLetter[0].buffer
        );
      }
    }

    const newDoc = new Model(payload);
    await newDoc.save();
    res
      .status(201)
      .json({ message: "Submission created successfully", data: newDoc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all submissions
exports.getAll = async (req, res) => {
  try {
    const submissions = await Model.find().sort({ createdAt: -1 });
    res.status(200).json(submissions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Mark as read
exports.markRead = async (req, res) => {
  try {
    const updated = await Model.findByIdAndUpdate(
      req.params.id,
      { status: "read" },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating status" });
  }
};
