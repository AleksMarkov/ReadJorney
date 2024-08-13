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
  const [page, setPage] = useState(1);
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
    if (bookLS.length === 0 || page > 1) {
      fetchBooks(page);
    }
  }, [user, page, fetchBooks, bookLS.length]);

  const fetchNextPage = async () => {
    if (page < totalPages) {
      await setPage(prevPage => prevPage + 1);
      await fetchBooks(page + 1);
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
