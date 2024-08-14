// services/bookAddService.js
// services/bookAddService.js
import axios from 'axios';

export const addBookToUserLibrary = async (book, token) => {
  try {
    const response = await axios.post(
      'https://readjourney.b.goit.study/api/books/add',
      {
        title: book.title,
        author: book.author,
        totalPages: book.totalPages,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
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
        case 404:
          errorMessage = 'Service not found';
          break;
        case 409:
          errorMessage = 'Such book already exists';
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

export const fetchUserBooks = async token => {
  try {
    const response = await axios.get(
      'https://readjourney.b.goit.study/api/books/own',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: 'Failed to fetch user books' };
  }
};
