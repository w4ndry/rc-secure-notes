import React, {memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import {ICardNoteProps} from '../../types';

const CardNoteComponent = ({item, onPress, deleteNote}: ICardNoteProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.cardContainer} onPress={onPress}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.note} numberOfLines={2}>
          {item.note}
        </Text>
      </Pressable>
      <Pressable style={styles.deleteButton} onPress={deleteNote}>
        <Text>Hapus</Text>
      </Pressable>
    </View>
  );
};

const CardNote = memo(CardNoteComponent);
export default CardNote;
