// context/BookContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import bookService from '../services/bookService';
import { AuthContext } from './AuthContext';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      if (user && user.token) {
        try {
          const books = await bookService.getRecommendedBooks(user.token);
          setRecommendedBooks(books);
        } catch (error) {
          console.error('Error fetching recommended books:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRecommendedBooks();
  }, [user]);

  return (
    <BookContext.Provider value={{ recommendedBooks, loading }}>
      {children}
    </BookContext.Provider>
  );
};
