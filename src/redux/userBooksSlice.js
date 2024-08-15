//userBooksSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userBooksSlice = createSlice({
  name: 'userBooks',
  initialState: [],
  reducers: {
    setUserBooks: (state, action) => {
      return action.payload;
    },
    updateUserBookStatus: (state, action) => {
      const { bookId, status } = action.payload;
      const bookIndex = state.findIndex(book => book._id === bookId);
      if (bookIndex !== -1) {
        state[bookIndex].status = status;
      }
    },
    deleteUserBook: (state, action) => {
      return state.filter(book => book._id !== action.payload);
    },
    clearUserBooks: () => {
      return [];
    },
  },
});

export const {
  setUserBooks,
  updateUserBookStatus,
  deleteUserBook,
  clearUserBooks,
} = userBooksSlice.actions;

export const selectUserBooks = state => state.userBooks;

export default userBooksSlice.reducer;
