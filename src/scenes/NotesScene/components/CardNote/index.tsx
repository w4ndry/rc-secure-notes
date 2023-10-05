import React, {memo} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';
import {INoteItem} from '../../types';

const CardNoteComponent = (props: INoteItem) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        {props.title}
      </Text>
      <Text style={styles.note} numberOfLines={2}>
        {props.note}
      </Text>
    </Pressable>
  );
};

const CardNote = memo(CardNoteComponent);
export default CardNote;
