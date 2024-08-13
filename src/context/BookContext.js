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
  const [page, setPage] = useState(1); // Инициализация page как 1
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch();
  const bookLS = useSelector(selectBookLS);

  const fetchBooks = useCallback(
    async page => {
      if (user && user.token) {
        setLoading(true);
        try {
          const limit = 10;
          const { results, totalPages } = await bookService.getRecommendedBooks(
            user.token,
            page,
            limit
          );
          dispatch(addBooksToLS(results));
          setTotalPages(totalPages);
        } catch (error) {
          console.error('Error fetching recommended books:', error);
        } finally {
          setLoading(false);
        }
      }
    },
    [user, dispatch]
  );

  useEffect(() => {
    setPage(1); // Сбрасываем page на 1 при монтировании компонента
    if (bookLS.length === 0) {
      fetchBooks(1); // Загружаем книги с первой страницы
    }
  }, [user, fetchBooks, bookLS.length]); // 'page' убран из массива зависимостей

  const fetchNextPage = async () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      await fetchBooks(nextPage);
    }
  };

  return (
    <BookContext.Provider
      value={{
        loading,
        fetchNextPage,
        page,
        totalPages,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
