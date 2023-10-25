import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
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
    } catch (error) {
      console.error('Failed to set token:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setToken(null);
    } catch (error) {
      console.error('Failed to remove token:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
