import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationStack } from './navigation/NavigationStack';

export const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

LogBox.ignoreLogs(['new NativeEventEmitter']);
