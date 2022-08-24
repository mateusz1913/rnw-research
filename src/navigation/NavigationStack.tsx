import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { ROUTES } from './routes';
import { HomeScreen } from '../screens/HomeScreen';
import { LocalizeScreen } from '../screens/LocalizeScreen';
import { WebViewScreen } from '../screens/WebViewScreen';
import { CheckboxScreen } from '../screens/CheckboxScreen';

const Stack = createStackNavigator<RootStackParamList>();

export const NavigationStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.LOCALIZE} component={LocalizeScreen} />
      <Stack.Screen name={ROUTES.WEBVIEW} component={WebViewScreen} />
      <Stack.Screen name={ROUTES.CHECKBOX} component={CheckboxScreen} />
    </Stack.Navigator>
  );
};
