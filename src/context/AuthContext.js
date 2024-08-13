//context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const data = await authService.getCurrentUser(token);
          setUser(data);
        } catch (error) {
          console.error('Error fetching current user:', error);
          setUser(null);
        }
      }
      setLoading(false);
    };

    checkUser();
  }, []);

  const signup = async userData => {
    try {
      const data = await authService.signup(userData);
      localStorage.setItem('token', data.token);
      setUser(data);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const signin = async userData => {
    try {
      const data = await authService.signin(userData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      setUser(data);
    } catch (error) {
      console.error('Signin error:', error);
      throw error;
    }
  };

  const signout = async () => {
    const token = localStorage.getItem('token');
    try {
      await authService.signout(token);
    } catch (error) {
      console.error('Signout error:', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        signout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
