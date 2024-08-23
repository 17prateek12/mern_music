import axios from 'axios';

export const getAllSongs = async () => {
  try {
    const response = await axios.get('/api/songs'); // Ensure this endpoint is correct
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch songs');
  }
};