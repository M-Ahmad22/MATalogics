// routes/applicationRoutes.js
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  create,
  getAll,
  markRead,
} = require("../Controllers/applicationController");

// Upload multiple fields: resume and coverLetter
router.post(
  "/job-applications",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "coverLetter", maxCount: 1 },
  ]),
  create
);

router.get("/job-applications", getAll);
router.patch("/job-applications/:id/read", markRead);

module.exports = router;
