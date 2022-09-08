import { NativeModules } from 'react-native';

export const NativeNavigationModule = {
  navigateToNativePage: () => {
    NativeModules.NativeNavigationModule.navigateToNativePage();
  },
};
