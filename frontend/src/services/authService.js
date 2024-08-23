// services/authService.js
import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('/api/auth/login', { email, password });
    return response;
  } catch (error) {
    throw error;
  }
};

export const register = async (email, password) => {
  try {
    const response = await axios.post('/api/auth/register', { email, password });
    return response;
  } catch (error) {
    throw error;
  }
};
