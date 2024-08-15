// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
// import App from './test/App';
import './index.css';
import GlobalStyles from 'GlobalStyles';
import store from './redux/store';
import { AuthProvider } from './context/AuthContext';
import { BookProvider } from './context/BookContext'; // Import BookProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/ReadJorney">
        <AuthProvider>
          <BookProvider>
            {' '}
            <GlobalStyles />
            <App />
          </BookProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
