const express = require('express');
const connectDB = require('./backend/config/db.js');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./backend/routes/authRoutes.js');
const songRoutes = require('./backend/routes/songRoutes.js');
const playlistRoutes = require('./backend/routes/playlistRoutes.js');
dotenv.config();
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/public', express.static('public'));


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
