import {useCallback, useEffect, useState} from 'react';
import {loadString, save} from '../storage';
import {SAVED_PASSWORD} from '../storage/storageKeys';

const MIN_PASSWORD_LENGTH = 6;

function usePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isSavePasswordSuccess, setIsSavePasswordSuccess] = useState(false);

  useEffect(
    function resetPassword() {
      if (isSavePasswordSuccess) {
        setErrorMessage('');
        setPassword('');
        setConfirmPassword('');
        setIsForgotPassword(false);
        setIsSavePasswordSuccess(false);
      }
    },
    [isSavePasswordSuccess],
  );

  useEffect(
    function resetPassword() {
      if (isForgotPassword) {
        setIsSavePasswordSuccess(false);
      }
    },
    [isForgotPassword],
  );

  const savePassword = useCallback(() => {
    if (!password) {
      setErrorMessage('Password is required');
      return;
    }
    if (!isPasswordExist() || isForgotPassword) {
      if (password.length !== MIN_PASSWORD_LENGTH) {
        setErrorMessage(`Password minimal ${MIN_PASSWORD_LENGTH} character`);
        return;
      }
      if (!confirmPassword) {
        setErrorMessage('Password is note mismatch');
        return;
      }
      if (password.length !== confirmPassword.length) {
        setErrorMessage('Password is not mismatch');
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
    password,
    confirmPassword,
    errorMessage,
    isForgotPassword,
    isSavePasswordSuccess,
    isLoginSuccess,
  };
}

export default usePassword;
