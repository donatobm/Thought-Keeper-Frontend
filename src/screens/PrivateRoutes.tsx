import React, { useEffect, useContext } from 'react';
import { useNavigate, useRoutes } from 'react-router-native';
import NotesScreen from './PrivateRoutes/NotesScreen';
import NoteDetailScreen from './PrivateRoutes/NoteDetailScreen';
import UserScreen from './PrivateRoutes/UserScreen';
import AuthContext from '../context/AuthContext';

const PrivateRoutes = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const screens = useRoutes([
    { path: '/notes', element: <NotesScreen /> },
    { path: '/notes/:noteId', element: <NoteDetailScreen /> },
    { path: '/user', element: <UserScreen /> },
    { path: '*', element: <NotesScreen /> },
  ]);

  useEffect(() => {
    if (!token) navigate('/register');
  }, []);

  return screens;
};

export default PrivateRoutes;
