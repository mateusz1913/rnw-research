import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { ROUTES } from './routes';
import { HomeScreen } from '../screens/HomeScreen';
import { LocalizeScreen } from '../screens/LocalizeScreen';
import { WebViewScreen } from '../screens/WebViewScreen';
import { CheckboxScreen } from '../screens/CheckboxScreen';
import { VideoScreen } from '../screens/VideoScreen';
import { VideoPlayerScreen } from '../screens/VideoPlayerScreen';
import { FlyoutScreen } from '../screens/FlyoutScreen';
import { VideoAudioScreen } from '../screens/VideoAudioScreen';

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
      <Stack.Screen name={ROUTES.VIDEO} component={VideoScreen} />
      <Stack.Screen
        name={ROUTES.VIDEO_PLAYER}
        component={VideoPlayerScreen}
        options={({ route }) => ({
          title: `${route.name} ${
            route.params.hasBuiltInControls ? 'BuiltIn Controls' : ''
          }`,
        })}
      />
      <Stack.Screen name={ROUTES.FLYOUT} component={FlyoutScreen} />
      <Stack.Screen name={ROUTES.VIDEO_AUDIO} component={VideoAudioScreen} />
    </Stack.Navigator>
  );
};
