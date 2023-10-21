import React from 'react';
import { Routes, Route } from 'react-router-native';
import RegisterScreen from './PublicRoutes/RegisterScreen';
import LoginScreen from './PublicRoutes/LoginScreen';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
};

export default PublicRoutes;
