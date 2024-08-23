const Playlist = require('../models/Playlist.js');

exports.createPlaylist = async (req, res) => {
  const { name } = req.body;
  try {
    const playlist = new Playlist({ name, user: req.user.userId });
    await playlist.save();
    res.status(201).json(playlist);
  } catch (err) {
    res.status(400).json({ error: 'Playlist creation failed' });
  }
};

exports.addSongToPlaylist = async (req, res) => {
  const { playlistId, songId } = req.body;
  try {
    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }

    playlist.songs.push(songId);
    await playlist.save();
    res.json(playlist);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getUserPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({ user: req.user.userId }).populate('songs');
    res.json(playlists);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
