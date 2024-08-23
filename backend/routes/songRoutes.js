const express = require('express');
const { getAllSongs,uploadsong } = require('../controllers/songController.js');
const authMiddleware = require("../middleware/authMiddleware.js")

const router = express.Router();

router.get('/', authMiddleware,getAllSongs);
router.post('/upload',authMiddleware,uploadsong);

module.exports = router;
