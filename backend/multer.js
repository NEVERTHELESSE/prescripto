const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Destination folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // File naming convention
  },
});

// Initialize upload middleware with storage
const upload = multer({ storage });

// Single file upload endpoint
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    res.send({
      message: "File uploaded successfully",
      file: req.file,
    });
  } catch (error) {
    res.status(400).send({ error: "File upload failed" });
  }
});

// Server listening on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
