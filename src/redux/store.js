// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import screenSizeReducer from './screenSizeSlice';
import bookLSReducer from './bookLSSlice';
import userBooksReducer from './userBooksSlice';
import authReducer from './authSlice';
import readBookReducer from './readBookSlice';

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    bookLS: bookLSReducer,
    userBooks: userBooksReducer,
    auth: authReducer,
    readBook: readBookReducer,
  },
});

export default store;
