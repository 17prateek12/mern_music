const express = require('express');
const {
  createPlaylist,
  addSongToPlaylist,
  getUserPlaylists,
} = require('../controllers/playlistController.js');
const authMiddleware = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/', authMiddleware, createPlaylist);
router.post('/add', authMiddleware, addSongToPlaylist);
router.get('/', authMiddleware, getUserPlaylists);

module.exports = router;
