import React, {memo} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';
import { IFloatingButton } from './types';

const FloatingButtonComponent = ({onPress}: IFloatingButton) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.plusText}>+</Text>
    </Pressable>
  );
};

const FloatingButton = memo(FloatingButtonComponent);
export default FloatingButton;
