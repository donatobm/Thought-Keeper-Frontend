import React, { useEffect, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-native';
import NotesScreen from './PrivateRoutes/NotesScreen';
import NoteDetailScreen from './PrivateRoutes/NoteDetailScreen';
import UserScreen from './PrivateRoutes/UserScreen';
import AuthContext from '../context/AuthContext';

const PrivateRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/notes');
  }, []);

  return (
    <Routes>
      <Route path="/notes" element={<NotesScreen />} />
      <Route path="/notes/:noteId" element={<NoteDetailScreen />} />
      <Route path="/user" element={<UserScreen />} />
    </Routes>
  );
};

export default PrivateRoutes;
