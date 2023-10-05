import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import { Props } from './types';
import commonStyles from '../../styles';

const NotesFormScene = ({navigation}: Props) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  return (
    <View style={commonStyles.container}>
      <TextInput
        style={styles.inputTitle}
        value={title}
        onChangeText={setTitle}
        placeholder="Note Title"
      />
      <View style={styles.inputNoteContainer}>
        <TextInput
          style={styles.inputNote}
          value={note}
          onChangeText={setNote}
          placeholder="Your note here"
          multiline={true}
        />
      </View>
    </View>
  );
};

export default NotesFormScene;
