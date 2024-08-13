// services/bookService.js
import axios from 'axios';

const BASE_URL = 'https://readjourney.b.goit.study/api';

const bookService = {
  getRecommendedBooks: async (token, page = 1, limit = 10) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/books/recommend?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        }
      );
      return {
        results: response.data.results,
        totalPages: response.data.totalPages,
      };
    } catch (error) {
      console.error('Error fetching recommended books:', error);
      throw error;
    }
  },
};

export default bookService;
