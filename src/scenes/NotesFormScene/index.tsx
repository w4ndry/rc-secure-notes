import React, {useRef, useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import styles from './styles';
import { Props } from './types';
import commonStyles from '../../styles';
import useNotes from '../../hooks/useNotes';
import ButtonSave from './components/ButtonSave';

const NotesFormScene = ({navigation, noteId}: Props) => {
  const inputNoteRef = useRef<TextInput>(null);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const {saveNote, editNote} = useNotes();

  function onPress() {
    if (!title) {
      alert('Title is required');
      return;
    }
    if (!note) {
      alert('Note is required');
      return;
    }
    if (noteId) {
      editNote({id: noteId, title, note});
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
