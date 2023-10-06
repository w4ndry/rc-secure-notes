import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {Modal, Pressable, Text, TextInput, View} from 'react-native';
import styles from './styles';
import ButtonSave from '../ButtonSave';
import usePassword from '../../hooks/usePassword';
import {IInputPasswordModalProps, IInputPasswordModalRef} from './types';

const InputPasswordModalComponent = forwardRef<
  IInputPasswordModalRef,
  IInputPasswordModalProps
>((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);

  const {
    isPasswordExist,
    setPassword,
    setConfirmPassword,
    savePassword,
    setIsForgotPassword,
    password,
    confirmPassword,
    errorMessage,
    isForgotPassword,
    isSavePasswordSuccess,
    isLoginSuccess,
  } = usePassword();
  const isPasswordNotExist = !isPasswordExist();

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  useEffect(
    function onLoginSuccess() {
      if (isLoginSuccess) {
        props.goToNotes();
      }
    },
    [isLoginSuccess],
  );

  function open() {
    setModalVisible(true);
  }

  function close() {
    setModalVisible(false);
  }

  function forgotPassword() {
    setIsForgotPassword(true);
  }

  const shouldShowConfirmPassword =
    !isSavePasswordSuccess && (isPasswordNotExist || isForgotPassword);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <Pressable style={styles.centeredView} onPress={close}>
        <Pressable>
          <View style={styles.modalView}>
            <Text style={styles.titleText}>
              {shouldShowConfirmPassword ? 'Input Password' : 'Login'}
            </Text>
            <TextInput
              style={styles.inputTitle}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
            />
            {shouldShowConfirmPassword && (
              <TextInput
                style={styles.inputTitle}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm Password"
              />
            )}
            <Text style={styles.errorText}>{errorMessage}</Text>
            <ButtonSave
              text={shouldShowConfirmPassword ? 'SAVE' : 'LOGIN'}
              onPress={savePassword}
            />
            {!isForgotPassword && (
              <Pressable onPress={forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password</Text>
              </Pressable>
            )}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
});

const InputPasswordModal = memo(InputPasswordModalComponent);
export default InputPasswordModal;
