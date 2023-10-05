import React from 'react';
import {View} from 'react-native';
import {Props} from './types';
import {NOTES_SCENE} from '../../navigations/SceneKey';
import useBiometrics from '../../hooks/useBiometrics';
import commonStyle from '../../styles';
import ButtonSave from '../../components/ButtonSave';
import style from './styles';

const HomeScene = ({navigation}: Props) => {
  const {showBiometrics} = useBiometrics();

  function goToNotes() {
    const handleSuccess = () => {
      navigation.navigate(NOTES_SCENE);
    };
    const handleError = () => {
      console.log('err')
    };
    showBiometrics(handleSuccess, handleError);
  }

  return (
    <View style={[commonStyle.container, style.container]}>
      <ButtonSave text="SEE NOTES" onPress={goToNotes} />
    </View>
  );
};

export default HomeScene;
