import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {IButtonSave} from './types';

const ButtonSaveComponent = ({text, onPress}: IButtonSave) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const ButtonSave = memo(ButtonSaveComponent);
export default ButtonSave;
