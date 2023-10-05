import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import { IButtonSave } from '../../types';

const ButtonSaveComponent = ({onPress}: IButtonSave) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>SAVE</Text>
    </TouchableOpacity>
  );
};

const ButtonSave = memo(ButtonSaveComponent);
export default ButtonSave;
