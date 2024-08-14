//userBooksSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userBooksSlice = createSlice({
  name: 'userBooks',
  initialState: [],
  reducers: {
    setUserBooks: (state, action) => {
      return action.payload;
    },
    clearUserBooks: () => {
      return [];
    },
  },
});

export const { setUserBooks, clearUserBooks } = userBooksSlice.actions;

export const selectUserBooks = state => state.userBooks;

export default userBooksSlice.reducer;
