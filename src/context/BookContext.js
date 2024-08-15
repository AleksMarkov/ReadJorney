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
import { useDispatch, useSelector } from 'react-redux';
import { addBooksToLS, selectBookLS, clearBookLS } from '../redux/bookLSSlice';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const bookLS = useSelector(selectBookLS);

  const fetchAllBooks = useCallback(async () => {
    if (user && user.token) {
      setLoading(true);
      try {
        const initialResponse = await bookService.getRecommendedBooks(
          user.token,
          1,
          1
        );

        const totalPages = initialResponse.totalPages;

        const fullResponse = await bookService.getRecommendedBooks(
          user.token,
          1,
          totalPages
        );

        dispatch(addBooksToLS(fullResponse.results));
      } catch (error) {
        console.error('Error fetching all recommended books:', error);
      } finally {
        setLoading(false);
      }
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (user && bookLS.length === 0) {
      fetchAllBooks();
    }
  }, [user, fetchAllBooks, bookLS.length]);

  useEffect(() => {
    if (!user) {
      dispatch(clearBookLS());
    }
  }, [user, dispatch]);

  return (
    <BookContext.Provider
      value={{
        loading,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
