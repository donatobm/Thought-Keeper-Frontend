import React from 'react';
import { Routes, Route } from 'react-router-native';
import NotesScreen from './PrivateRoutes/NotesScreen';
import NoteDetailScreen from './PrivateRoutes/NoteDetailScreen';
import UserScreen from './PrivateRoutes/UserScreen';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/notes" element={<NotesScreen />} />
      <Route path="/notes/:noteId" element={<NoteDetailScreen />} />
      <Route path="/user" element={<UserScreen />} />
    </Routes>
  );
};

export default PrivateRoutes;
