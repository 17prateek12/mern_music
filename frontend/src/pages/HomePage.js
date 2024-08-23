import React, { useState } from 'react';
import SongList from '../components/SongList';
import PlaylistManager from '../components/PlaylistManager';
import MusicPlayer from '../components/MusicPlayer';

const HomePage = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div>
      <SongList onSongSelect={setSelectedSong} />
      <PlaylistManager selectedSong={selectedSong} />
      <MusicPlayer song={selectedSong} />
    </div>
  );
};

export default HomePage;
