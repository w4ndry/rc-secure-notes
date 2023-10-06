import React, {useRef} from 'react';
import {View} from 'react-native';
import {Props} from './types';
import {NOTES_SCENE} from '../../navigations/SceneKey';
import useBiometrics from '../../hooks/useBiometrics';
import commonStyle from '../../styles';
import ButtonSave from '../../components/ButtonSave';
import style from './styles';
import InputPasswordModal from '../../components/InputPasswordModal';
import {IInputPasswordModalRef} from '../../components/InputPasswordModal/types';

const HomeScene = ({navigation}: Props) => {
  const inputPasswordModalRef = useRef<IInputPasswordModalRef>(null);
  const {showBiometrics} = useBiometrics();

  function login() {
    const handleSuccess = () => {
      goToNotes();
    };
    const handleError = () => {
      inputPasswordModalRef.current?.open();
    };
    showBiometrics(handleSuccess, handleError);
  }

  function goToNotes() {
    navigation.navigate(NOTES_SCENE);
  }

  return (
    <View style={[commonStyle.container, style.container]}>
      <ButtonSave text="LOGIN" onPress={login} />
      <InputPasswordModal ref={inputPasswordModalRef} goToNotes={goToNotes} />
    </View>
  );
};

export default HomeScene;
