// context/BookContext.js
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import bookService from '../services/bookService';
import { AuthContext } from './AuthContext';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Используем useCallback, чтобы гарантировать, что функция не изменится при каждом рендере
  const fetchBooks = useCallback(
    async page => {
      if (user && user.token) {
        setLoading(true);
        try {
          const { results, totalPages } = await bookService.getRecommendedBooks(
            user.token,
            page
          );
          setRecommendedBooks(results);
          setTotalPages(totalPages);
        } catch (error) {
          console.error('Error fetching recommended books:', error);
        } finally {
          setLoading(false);
        }
      }
    },
    [user]
  );

  useEffect(() => {
    fetchBooks(page);
  }, [user, page, fetchBooks]); // Теперь fetchBooks можно безопасно включить в зависимости

  const fetchNextPage = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const fetchPreviousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  return (
    <BookContext.Provider
      value={{
        recommendedBooks,
        loading,
        fetchNextPage,
        fetchPreviousPage,
        page,
        totalPages,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
