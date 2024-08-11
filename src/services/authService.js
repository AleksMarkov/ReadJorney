//services/authService.js
import axios from 'axios';

const BASE_URL = 'https://readjourney.b.goit.study/api';

const authService = {
  signup: async userData => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, userData);
      return response.data;
    } catch (error) {
      console.error('Signup error:', error.response.data);
      throw error;
    }
  },

  signin: async userData => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signin`, userData);
      return response.data;
    } catch (error) {
      console.error('Signin error:', error.response.data);
      throw error;
    }
  },

  getCurrentUser: async token => {
    try {
      const response = await axios.get(`${BASE_URL}/users/current`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error('Get current user error:', error.response.data);
      throw error;
    }
  },

  refreshTokens: async refreshToken => {
    try {
      const response = await axios.post(
        `${BASE_URL}/users/current/refresh`,
        null,
        {
          headers: { Authorization: `Bearer ${refreshToken}` },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Refresh token error:', error.response.data);
      throw error;
    }
  },

  signout: async token => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signout`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error('Signout error:', error.response.data);
      throw error;
    }
  },
};

export default authService;
