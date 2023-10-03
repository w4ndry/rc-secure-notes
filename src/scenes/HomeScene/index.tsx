import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Props} from './types';
import {NOTES_SCENE} from '../../navigations/SceneKey';

const HomeScene = ({navigation}: Props) => {
  function goToNotes() {
    navigation.navigate(NOTES_SCENE);
  }

  return (
    <View>
      <Text>HomeScene</Text>
      <Pressable onPress={goToNotes}>
        <Text>GO TO NOTES</Text>
      </Pressable>
    </View>
  );
};

export default HomeScene;
