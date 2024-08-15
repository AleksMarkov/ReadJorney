// redux/readBookSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: null,
  status: 'idle',
  error: null,
};

const readBookSlice = createSlice({
  name: 'readBook',
  initialState,
  reducers: {
    setReadBook: (state, action) => {
      state.book = action.payload;
      state.status = 'succeeded';
    },
    setReadBookStatus: (state, action) => {
      state.status = action.payload;
    },
    setReadBookError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    },
    clearReadBook: state => {
      state.book = null;
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const {
  setReadBook,
  setReadBookStatus,
  setReadBookError,
  clearReadBook,
} = readBookSlice.actions;

export const selectReadBook = state => state.readBook.book;
export const selectReadBookStatus = state => state.readBook.status;
export const selectReadBookError = state => state.readBook.error;

export default readBookSlice.reducer;
