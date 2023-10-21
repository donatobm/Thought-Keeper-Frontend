import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
          setIsUserLoggedIn(true);
        } else {
          setIsUserLoggedIn(false);
        }
      } catch (error) {
        console.error('Failed to get token:', error);
      }
    };
    checkToken();
  }, []);

  const login = async newToken => {
    try {
      await AsyncStorage.setItem('token', newToken);
      setToken(newToken);
      setIsUserLoggedIn(true);
    } catch (error) {
      console.error('Failed to set token:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setToken(null);
      setIsUserLoggedIn(false);
    } catch (error) {
      console.error('Failed to remove token:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isUserLoggedIn, login, logout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
