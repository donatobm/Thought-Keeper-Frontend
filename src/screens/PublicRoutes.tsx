import React, { useEffect, useContext } from 'react';
import { useNavigate, useRoutes } from 'react-router-native';
import AuthContext from '../context/AuthContext';
import LoginScreen from './PublicRoutes/LoginScreen';
import RegisterScreen from './PublicRoutes/RegisterScreen';

const PublicRoutes = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const screens = useRoutes([
    { path: '/login', element: <LoginScreen /> },
    { path: '/register', element: <RegisterScreen /> },
    { path: '*', element: <RegisterScreen /> },
  ]);

  useEffect(() => {
    if (token) navigate('/notes');
  }, []);

  return screens;
};

export default PublicRoutes;
