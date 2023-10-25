import React, { useEffect, useContext } from 'react';
import { useNavigate, useRoutes } from 'react-router-native';
import RegisterScreen from './PublicRoutes/RegisterScreen';
import LoginScreen from './PublicRoutes/LoginScreen';
import AuthContext from '../context/AuthContext';

const PublicRoutes = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const screens = useRoutes([
    { path: '/register', element: <RegisterScreen /> },
    { path: '/login', element: <LoginScreen /> },
    { path: '*', element: <RegisterScreen /> },
  ]);

  useEffect(() => {
    if (token) navigate('/notes');
  }, []);

  return screens;
};

export default PublicRoutes;
