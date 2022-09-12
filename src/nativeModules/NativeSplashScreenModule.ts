import { NativeModules } from 'react-native';

export const NativeSplashScreenModule = {
  hide: () => {
    NativeModules.NativeSplashScreenModule.hide();
  },
};
