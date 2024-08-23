const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  filename: {
    type: String,
    required: true,
  },
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
