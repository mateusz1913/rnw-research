import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeSplashScreenModule } from './nativeModules/NativeSplashScreenModule';

import { NavigationStack } from './navigation/NavigationStack';

export const App: React.FC = () => {
  React.useEffect(() => {
    // Simulate some setup steps before hiding splash screen;
    const timeout = setTimeout(() => {
      NativeSplashScreenModule.hide();
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

LogBox.ignoreLogs(['new NativeEventEmitter']);
