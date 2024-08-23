import axios from 'axios';

const API_URL = '/api/playlists';

export const createPlaylist = async (name, token) => {
  try {
    const response = await axios.post(API_URL, { name }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating playlist:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const addSongToPlaylist = async (playlistId, songId, token) => {
  try {
    const response = await axios.post(`${API_URL}/add`, { playlistId, songId }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding song to playlist:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getUserPlaylists = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching playlists:', error.response ? error.response.data : error.message);
    throw error;
  }
};
