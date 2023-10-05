import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import CardNote from './components/CardNote';
import {INoteItem, IPropsNoteItem} from './types';
import FloatingButton from '../../components/FloatingButton';

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

const NotesScene = () => {
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

  return (
    <>
      <FlatList
        style={styles.container}
        data={notes}
        renderItem={renderItem}
        keyExtractor={renderKeyExtractor}
      />
      <FloatingButton />
    </>
  );
};

export default NotesScene;
