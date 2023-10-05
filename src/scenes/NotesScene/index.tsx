import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import CardNote from './components/CardNote';
import {INoteItem, IPropsNoteItem, Props} from './types';
import FloatingButton from '../../components/FloatingButton';
import { NOTES_FORM_SCENE } from '../../navigations/SceneKey';
import commonStyles from '../../styles';

const data = [
  {
    id: 0,
    title: 'Membaca',
    description: 'Description membaca',
  },
  {
    id: 1,
    title: 'Membaca',
    description: 'Description membaca',
  },
];

const NotesScene = ({navigation}: Props) => {
  const [notes, setNotes] = useState<Array<INoteItem>>([]);

  useEffect(function setDataOnMount() {
    setNotes(data);
  }, []);

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
