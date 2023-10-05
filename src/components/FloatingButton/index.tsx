import React, {memo} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

const FloatingButtonComponent = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.plusText}>+</Text>
    </Pressable>
  );
};

const FloatingButton = memo(FloatingButtonComponent);
export default FloatingButton;
