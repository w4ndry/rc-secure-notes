import React, {useCallback, useState} from 'react';
import {FlatList} from 'react-native';
import CardNote from './components/CardNote';
import {INoteItem, IPropsNoteItem, Props} from './types';
import FloatingButton from '../../components/FloatingButton';
import {NOTES_FORM_SCENE} from '../../navigations/SceneKey';
import commonStyles from '../../styles';
import {useFocusEffect} from '@react-navigation/native';
import {getNotes} from '../../utils/NoteUtils';
import useNotes from '../../hooks/useNotes';
import useBiometrics from '../../hooks/useBiometrics';

const NotesScene = ({navigation}: Props) => {
  const [notes, setNotes] = useState<INoteItem[]>([]);
  const {deleteNote} = useNotes();
  const {showBiometrics} = useBiometrics();

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
    const onPress = () => {
      const handleSuccess = () => {
        navigation.navigate(NOTES_FORM_SCENE, {item});
      };
      showBiometrics(handleSuccess);
    };
    const deleteNoteById = () => {
      const handleSuccess = () => {
        deleteNote(item.id);
        const notes = getNotes();
        setNotes(notes);
      };
      showBiometrics(handleSuccess);
    };

    return (
      <CardNote item={item} onPress={onPress} deleteNote={deleteNoteById} />
    );
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
