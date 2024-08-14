//store.js
import { configureStore } from '@reduxjs/toolkit';
import screenSizeReducer from './screenSizeSlice';
import bookLSReducer from './bookLSSlice';
import userBooksReducer from './userBooksSlice';
import authReducer from './authSlice'; // Добавьте импорт authReducer

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    bookLS: bookLSReducer,
    userBooks: userBooksReducer,
    auth: authReducer, // Добавьте authReducer в корневой редюсер
  },
});

export default store;
