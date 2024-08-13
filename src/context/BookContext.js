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
import { addBooksToLS, selectBookLS } from '../redux/bookLSSlice';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const bookLS = useSelector(selectBookLS);

  const fetchAllBooks = useCallback(async () => {
    if (user && user.token) {
      setLoading(true);
      try {
        // Первый запрос для получения общего количества книг
        const initialResponse = await bookService.getRecommendedBooks(
          user.token,
          1,
          1
        );

        const totalPages = initialResponse.totalPages;

        // Второй запрос для получения всех книг
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
      fetchAllBooks(); // Загружаем все книги после авторизации
    }
  }, [user, fetchAllBooks, bookLS.length]);

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
