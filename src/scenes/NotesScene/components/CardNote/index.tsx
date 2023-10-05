import React, {memo} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';
import {ICardNoteProps} from '../../types';

const CardNoteComponent = ({item, onPress}: ICardNoteProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.note} numberOfLines={2}>
        {item.note}
      </Text>
    </Pressable>
  );
};

const CardNote = memo(CardNoteComponent);
export default CardNote;
