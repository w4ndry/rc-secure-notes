import React, {useCallback, useState} from 'react';
import {FlatList} from 'react-native';
import CardNote from './components/CardNote';
import {INoteItem, IPropsNoteItem, Props} from './types';
import FloatingButton from '../../components/FloatingButton';
import {NOTES_FORM_SCENE} from '../../navigations/SceneKey';
import commonStyles from '../../styles';
import {useFocusEffect} from '@react-navigation/native';
import {getNotes} from '../../utils/NoteUtils';

const NotesScene = ({navigation}: Props) => {
  const [notes, setNotes] = useState<INoteItem[]>([]);

  useFocusEffect(
    useCallback(function updateNotes() {
      let isFocused = true;
      if (isFocused) {
        const notes = getNotes();
        setNotes(notes);
      }

      return () => {
        isFocused = false;
      };
    }, []),
  );

  const renderItem = useCallback(({item}: IPropsNoteItem) => {
    return <CardNote {...item} />;
  }, []);

  const renderKeyExtractor = useCallback((item: INoteItem) => {
    return `${item.id}`;
  }, []);

  const goToNoteFormScene = useCallback(() => {
    navigation.navigate(NOTES_FORM_SCENE);
  }, []);

  return (
    <>
      <FlatList
        style={commonStyles.container}
        data={notes}
        renderItem={renderItem}
        keyExtractor={renderKeyExtractor}
      />
      <FloatingButton onPress={goToNoteFormScene} />
    </>
  );
};

export default NotesScene;
