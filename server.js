const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  }
});

const upload = multer({ storage: storage });

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'landingpage.html'));
});

// Handle file upload POST request
app.post("/upload", upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No files were uploaded.'); // Handle case where no file was uploaded
  }
  res.send('File uploaded successfully!'); // Send success message
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
