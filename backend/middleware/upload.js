const multer = require('multer');
const path = require('path');

// Configure multer to save files to the 'public' directory in the root
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public')); // Path to public directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original file name
  }
});

const upload = multer({ storage });

module.exports = upload;
