// redux/readBookSlice.js
// redux/readBookSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: null,
  status: 'idle',
  error: null,
  progress: [], // Добавляем progress в начальное состояние
};

const readBookSlice = createSlice({
  name: 'readBook',
  initialState,
  reducers: {
    setReadBook: (state, action) => {
      state.book = action.payload;
      state.status = 'succeeded';
      state.progress = action.payload.progress || []; // Сохраняем progress при загрузке книги
    },
    setReadBookStatus: (state, action) => {
      state.status = action.payload;
    },
    setReadBookError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    },
    setProgress: (state, action) => {
      state.progress = action.payload; // Добавляем действие для сохранения progress
    },
    clearReadBook: state => {
      state.book = null;
      state.status = 'idle';
      state.error = null;
      state.progress = []; // Очищаем progress при очистке книги
    },
  },
});

export const {
  setReadBook,
  setReadBookStatus,
  setReadBookError,
  setProgress, // Экспортируем новое действие
  clearReadBook,
} = readBookSlice.actions;

export const selectReadBook = state => state.readBook.book;
export const selectReadBookStatus = state => state.readBook.status;
export const selectReadBookError = state => state.readBook.error;
export const selectProgress = state => state.readBook.progress; // Экспортируем селектор для получения progress

export default readBookSlice.reducer;
