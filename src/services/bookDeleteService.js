// services/bookDeleteService.js
import axios from 'axios';

export const deleteBookFromUserLibrary = async (bookId, token) => {
  try {
    const response = await axios.delete(
      `https://readjourney.b.goit.study/api/books/remove/${bookId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
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
        case 401:
          errorMessage = 'This book not found';
          break;
        case 404:
          errorMessage = 'Service not found';
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
