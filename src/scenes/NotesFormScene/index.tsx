import React, {useEffect, useRef, useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import styles from './styles';
import { Props } from './types';
import commonStyles from '../../styles';
import useNotes from '../../hooks/useNotes';
import ButtonSave from './components/ButtonSave';

const NotesFormScene = ({route, navigation}: Props) => {
  const inputNoteRef = useRef<TextInput>(null);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const {saveNote, editNote} = useNotes();

  useEffect(function setDataOnMount() {
    if (route.params?.item) {
      const { item } = route.params;
      setTitle(item.title);
      setNote(item.note);
    }
  }, []);

  function onPress() {
    if (!title) {
      alert('Title is required');
      return;
    }
    if (!note) {
      alert('Note is required');
      return;
    }

    if (route.params?.item) {
      const { item } = route.params;
      editNote({id: item.id, title, note});
      navigation.pop();
      return;
    }
    saveNote(title, note);
    navigation.pop();
  }

  function setInputNoteFocus() {
    inputNoteRef.current?.focus();
  }

  return (
    <View style={commonStyles.container}>
      <TextInput
        style={styles.inputTitle}
        value={title}
        onChangeText={setTitle}
        placeholder="Note Title"
      />
      <Pressable style={styles.inputNoteContainer} onPress={setInputNoteFocus}>
        <TextInput
          ref={inputNoteRef}
          style={styles.inputNote}
          value={note}
          onChangeText={setNote}
          placeholder="Your note here"
          multiline={true}
        />
      </Pressable>
      <ButtonSave onPress={onPress} />
    </View>
  );
};

export default NotesFormScene;
