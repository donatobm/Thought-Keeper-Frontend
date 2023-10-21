import React, { useEffect, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-native';
import RegisterScreen from './PublicRoutes/RegisterScreen';
import LoginScreen from './PublicRoutes/LoginScreen';
import AuthContext from '../context/AuthContext';

const PublicRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate('/register');
  }, []);

  return (
    <Routes>
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
};

export default PublicRoutes;
