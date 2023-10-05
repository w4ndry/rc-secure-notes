import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { useState } from 'react';
import { Alert, Platform } from 'react-native';

interface IPromptOptions {
  message: string;
  description?: string;
  titleBiometricAuthFailed?: string;
  descriptionBiometricAuthFailed?: string;
  buttonBiometricAuthFailed?: string;
}

const TEXT = {
  promptMessage: 'Authentication required',
  cancelButtonText: 'Cancel',
  noConnection: 'Network request failed',
  biometricAuthFailed:
    'Log in attempts with biometric failed 5 times. To try again, lock your phone first, then unlock it.',
  biometricBtnClose: 'OK, Got It',
};

const useBiometrics = () => {
  const rnBiometrics = new ReactNativeBiometrics();

  const [biometricType, setBiometricType] = useState<string>('FingerPrint');
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  const isIOS = Platform.OS === 'ios';

  async function checkSensor(errorCallback?: (args: string) => void) {
    const { available, biometryType, error } =
      await rnBiometrics.isSensorAvailable();
    if (available) {
      setIsAvailable(true);
      if (biometryType === BiometryTypes.FaceID) {
        setBiometricType(BiometryTypes.FaceID);
      }
      return true;
    }
    errorCallback?.(error as string);
    return false;
  }

  async function cancelAuthentication() {
    await rnBiometrics.cancelAuthenticate();
  }

  async function showBiometrics(
    handleSuccess?: () => void,
    handleError?: () => void,
    options?: IPromptOptions,
  ) {
    if (!(await checkSensor(handleErrorInputBiometricIOSFiveTimes))) {
      return;
    }

    await rnBiometrics
      .simplePrompt({
        promptMessage: options?.message ?? TEXT.promptMessage,
        cancelButtonText: TEXT.cancelButtonText,
        fallbackPromptMessage: TEXT.biometricAuthFailed,
      })
      .then(res => {
        if (res.success) {
          handleSuccess?.();
          return;
        }
        handleError?.();
      })
      .catch((err: { message: string }) => {
        handleBiometricAuthFailed(err);
      });

    function handleBiometricAuthFailed(err: { message: string }) {
      const isWrongInputBiometricThreeTimes = /Code=-1/;
      const isAppStateChange = /Code=-4/;

      if (
        isWrongInputBiometricThreeTimes.test(err.message) ||
        isAppStateChange.test(err.message)
      ) {
        return;
      }

      Alert.alert('', TEXT.biometricAuthFailed, [
        {
          text: TEXT.biometricBtnClose,
        },
      ]);
    }

    function handleErrorInputBiometricIOSFiveTimes(errMsg: string) {
      const isWrongInputBiometricFiveTimes = /Code=-8/;
      if (isWrongInputBiometricFiveTimes.test(errMsg) && isIOS) {
        Alert.alert('', TEXT.biometricAuthFailed, [
          {
            text: TEXT.biometricBtnClose,
          },
        ]);
      }
    }
  }

  return {
    checkSensor,
    showBiometrics,
    cancelAuthentication,
    biometricType,
    isAvailable,
  };
};

export default useBiometrics;
