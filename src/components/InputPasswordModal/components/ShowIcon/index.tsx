import React, { memo } from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../../styles';
import { IShowIcon } from '../../types';

const ShowIconComponent = ({ isShow, onPress }: IShowIcon) => {
  function onToggle() {
    onPress(!isShow);
  }

  return (
    <Pressable onPress={onToggle}>
      <Text style={styles.showText}>{isShow ? 'Hide' : 'Show'}</Text>
    </Pressable>
  );
};

const ShowIcon = memo(ShowIconComponent);
export default ShowIcon;
