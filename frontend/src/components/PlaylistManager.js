import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createPlaylist, addSongToPlaylist, getUserPlaylists } from '../services/playlistService';

const PlaylistManager = ({ selectedSong }) => {
  const [playlistName, setPlaylistName] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    const fetchPlaylists = async () => {
      if (authState && authState.token) {
        try {
          const response = await getUserPlaylists(authState.token);
          setPlaylists(response.data);
        } catch (err) {
          console.error('Failed to fetch playlists:', err);
        }
      } else {
        console.error('No token found');
      }
    };
    fetchPlaylists();
  }, [authState]);

  const handleCreatePlaylist = async () => {
    if (authState && authState.token) {
      try {
        const response = await createPlaylist(playlistName, authState.token);
        setPlaylists([...playlists, response.data]);
        setPlaylistName('');
      } catch (err) {
        console.error('Failed to create playlist:', err);
      }
    }
  };

  const handleAddSong = async (playlistId) => {
    if (authState && authState.token && selectedSong) {
      try {
        await addSongToPlaylist(playlistId, selectedSong._id, authState.token);
      } catch (err) {
        console.error('Failed to add song to playlist:', err);
      }
    }
  };

  return (
    <div>
      <h2>Playlist Manager</h2>
      <input
        type="text"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        placeholder="New Playlist Name"
      />
      <button onClick={handleCreatePlaylist}>Create Playlist</button>

      <ul>
        {playlists.map((playlist) => (
          <li key={playlist._id}>
            {playlist.name}
            {selectedSong && (
              <button onClick={() => handleAddSong(playlist._id)}>Add Song</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistManager;
