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
import { AsyncStorageScreen } from '../screens/AsyncStorageScreen';
import { SensitiveInfoScreen } from '../screens/SensitiveInfoScreen';
import { TrackPlayerAudioScreen } from '../screens/TrackPlayerAudioScreen';
import { PrintScreen } from '../screens/PrintScreen';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { CameraScreen } from '../screens/CameraScreen';
import { LinearGradientScreen } from '../screens/LinearGradientScreen';
import { DeviceInfoScreen } from '../screens/DeviceInfoScreen';

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
      <Stack.Screen
        name={ROUTES.ASYNC_STORAGE}
        component={AsyncStorageScreen}
      />
      <Stack.Screen
        name={ROUTES.SENSITIVE_INFO}
        component={SensitiveInfoScreen}
      />
      <Stack.Screen
        name={ROUTES.TRACK_PLAYER_AUDIO}
        component={TrackPlayerAudioScreen}
      />
      <Stack.Screen name={ROUTES.PRINT} component={PrintScreen} />
      <Stack.Screen name={ROUTES.PERMISSIONS} component={PermissionsScreen} />
      <Stack.Screen name={ROUTES.CAMERA} component={CameraScreen} />
      <Stack.Screen
        name={ROUTES.LINEAR_GRADIENT}
        component={LinearGradientScreen}
      />
      <Stack.Screen name={ROUTES.DEVICE_INFO} component={DeviceInfoScreen} />
    </Stack.Navigator>
  );
};
