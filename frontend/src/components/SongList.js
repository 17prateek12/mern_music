import React, { useEffect, useState } from 'react';
import { getAllSongs } from '../services/songService';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data = await getAllSongs();
        setSongs(data);
      } catch (err) {
        setError('Failed to fetch songs.');
      }
    };

    fetchSongs();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
