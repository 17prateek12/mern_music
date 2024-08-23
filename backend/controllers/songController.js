const Song = require('../models/Song');
const multer = require('multer');
const upload = require('../middleware/upload.js'); // Import multer configuration

// Function to get all songs
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Function to upload a song
exports.uploadsong = (req, res) => {
    upload.single('filename')(req, res, async (err) => {
      if (err) {
        console.log('Upload Error:', err); // Log upload errors
        return res.status(500).json({ message: 'Failed to upload song', error: err.message });
      }
  
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
  
      const { title, artist, user } = req.body;
      const filename = req.file.filename; // File uploaded by multer
  
      try {
        // Create a new Song document
        const newSong = new Song({
          title,
          artist,
          user: user, 
          filename,
        });
  
        await newSong.save();
        res.status(201).json(newSong);
      } catch (error) {
        res.status(500).json({ message: 'Failed to upload song', error });
      }
    });
  };