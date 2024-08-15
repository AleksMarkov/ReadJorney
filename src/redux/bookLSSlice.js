//bookLSSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const bookLSSlice = createSlice({
  name: 'bookLS',
  initialState: [],
  reducers: {
    addBooksToLS: (state, action) => {
      action.payload.forEach(book => {
        if (!state.find(b => b._id === book._id)) {
          state.push(book);
        }
      });
    },
    clearBookLS: () => [],
  },
});

export const { addBooksToLS, clearBookLS } = bookLSSlice.actions;

export const selectBookLS = state => state.bookLS;

export default bookLSSlice.reducer;
