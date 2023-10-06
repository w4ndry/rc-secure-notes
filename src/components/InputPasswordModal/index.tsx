import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { Modal, Pressable, Text, TextInput, View } from 'react-native';
import styles from './styles';
import ButtonSave from '../ButtonSave';
import usePassword from '../../hooks/usePassword';
import { IInputPasswordModalProps, IInputPasswordModalRef } from './types';
import ShowIcon from './components/ShowIcon';

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
    resetState,
    setIsShowPassword,
    setIsShowConfirmPassword,

    password,
    confirmPassword,
    errorMessage,
    isForgotPassword,
    isSavePasswordSuccess,
    isLoginSuccess,
    isShowPassword,
    isShowConfirmPassword,
  } = usePassword();
  const isPasswordNotExist = !isPasswordExist();

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  useEffect(
    function onLoginSuccess() {
      if (isLoginSuccess) {
        close();
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

  function onDismissModal() {
    resetState();
  }

  const shouldShowConfirmPassword =
    !isSavePasswordSuccess && (isPasswordNotExist || isForgotPassword);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onDismiss={onDismissModal}>
      <Pressable style={styles.centeredView} onPress={close}>
        <Pressable>
          <View style={styles.modalView}>
            <Text style={styles.titleText}>
              {shouldShowConfirmPassword ? 'Setup Password' : 'Login'}
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTitle}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry={!isShowPassword}
              />
              <ShowIcon isShow={isShowPassword} onPress={setIsShowPassword} />
            </View>
            {shouldShowConfirmPassword && (
              <View
                style={[styles.inputContainer, styles.inputConfirmPassword]}>
                <TextInput
                  style={styles.inputTitle}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Confirm Password"
                  secureTextEntry={!isShowConfirmPassword}
                />
                <ShowIcon
                  isShow={isShowConfirmPassword}
                  onPress={setIsShowConfirmPassword}
                />
              </View>
            )}
            {errorMessage && (
              <Text style={styles.errorText}>{errorMessage}</Text>
            )}
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
