import { useCallback, useEffect, useState } from 'react';
import { loadString, save } from '../storage';
import { SAVED_PASSWORD } from '../storage/storageKeys';

const MIN_PASSWORD_LENGTH = 6;

function usePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isSavePasswordSuccess, setIsSavePasswordSuccess] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  useEffect(
    function resetStateOnSuccess() {
      if (isSavePasswordSuccess) {
        resetState();
      }
    },
    [isSavePasswordSuccess],
  );

  useEffect(
    function resetSavePasswordSuccess() {
      if (isForgotPassword) {
        setIsSavePasswordSuccess(false);
        resetInputState();
      }
    },
    [isForgotPassword],
  );

  const resetState = useCallback(() => {
    setErrorMessage('');
    setPassword('');
    setConfirmPassword('');
    setIsForgotPassword(false);
    setIsSavePasswordSuccess(false);
    setIsLoginSuccess(false);
    setIsShowPassword(false);
    setIsShowConfirmPassword(false);
  }, []);

  const resetInputState = useCallback(() => {
    setErrorMessage('');
    setPassword('');
    setConfirmPassword('');
    setIsShowPassword(false);
    setIsShowConfirmPassword(false);
  }, []);

  const savePassword = useCallback(() => {
    if (!password) {
      setErrorMessage('Password is required');
      return;
    }
    if (!isPasswordExist() || isForgotPassword) {
      if (password.length < MIN_PASSWORD_LENGTH) {
        setErrorMessage(`Password minimal ${MIN_PASSWORD_LENGTH} character`);
        return;
      }
      if (!confirmPassword) {
        setErrorMessage('Password does not mismatch');
        return;
      }
      if (password.length !== confirmPassword.length) {
        setErrorMessage('Password does not mismatch');
        return;
      }

      save(SAVED_PASSWORD, password);
      setIsSavePasswordSuccess(true);
      return;
    }
    const savedPassword = loadString(SAVED_PASSWORD);
    if (password !== savedPassword) {
      setErrorMessage('Wrong password');
      return;
    }

    setIsLoginSuccess(true);
  }, [password, confirmPassword, isForgotPassword]);

  const isPasswordExist = useCallback(() => {
    return !!loadString(SAVED_PASSWORD);
  }, []);

  return {
    savePassword,
    isPasswordExist,
    setPassword,
    setConfirmPassword,
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
  };
}

export default usePassword;
