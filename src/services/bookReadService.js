// services/bookReadService.js
import axios from 'axios';

const BASE_URL = 'https://readjourney.b.goit.study/api';

export const fetchBookById = async (bookId, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/books/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    let errorMessage = 'An error occurred. Please try again.';
    if (error.response) {
      switch (error.response.status) {
        case 400:
          errorMessage = 'Bad request (invalid request body)';
          break;
        case 404:
          errorMessage = 'Book not found';
          break;
        case 500:
          errorMessage = 'Server error';
          break;
        default:
          errorMessage = 'An unexpected error occurred.';
      }
    }
    return { success: false, message: errorMessage };
  }
};
