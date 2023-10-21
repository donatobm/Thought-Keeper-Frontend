import React from 'react';
import { Text } from 'react-native';
import { useParams, useNavigate } from 'react-router-native';

const NoteDetailScreen = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();

  if (!noteId) {
    navigate('/notes');
    return null;
  }

  return <Text>Note Detail for {noteId}</Text>;
};

export default NoteDetailScreen;
