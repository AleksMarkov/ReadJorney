// services/bookReadingService.js
import axios from 'axios';

const BASE_URL = 'https://readjourney.b.goit.study/api';

export const startReadingBook = async (bookId, page, token) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/books/reading/start`,
      { id: bookId, page },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
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
        case 409:
          errorMessage =
            'This book is already read or you have already started reading it';
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
