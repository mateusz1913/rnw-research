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
import { BlobUtilScreen } from '../screens/BlobUtilScreen';
import { SliderScreen } from '../screens/SliderScreen';
import { ProgressViewScreen } from '../screens/ProgressViewScreen';
import { NetInfoScreen } from '../screens/NetInfoScreen';
import { DateTimePickerScreen } from '../screens/DateTimePickerScreen';
import { ClipboardScreen } from '../screens/ClipboardScreen';
import { ExpanderScreen } from '../screens/ExpanderScreen';
import { ConfigScreen } from '../screens/ConfigScreen';
import { FSScreen } from '../screens/FSScreen';
import { TextToSpeechScreen } from '../screens/TextToSpeechScreen';
import { PopupScreen } from '../screens/PopupScreen';
import { XamlScreen } from '../screens/XamlScreen';
import { SketchCanvasScreen } from '../screens/SketchCanvasScreen';
import { PdfScreen } from '../screens/PdfScreen';
import { PlatformColorScreen } from '../screens/PlatformColorScreen';

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
      <Stack.Screen name={ROUTES.POPUP} component={PopupScreen} />
      <Stack.Screen
        name={ROUTES.PLATFORM_COLOR}
        component={PlatformColorScreen}
      />
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
      <Stack.Screen name={ROUTES.BLOB_UTIL} component={BlobUtilScreen} />
      <Stack.Screen name={ROUTES.SLIDER} component={SliderScreen} />
      <Stack.Screen
        name={ROUTES.PROGRESS_VIEW}
        component={ProgressViewScreen}
      />
      <Stack.Screen name={ROUTES.NETINFO} component={NetInfoScreen} />
      <Stack.Screen
        name={ROUTES.DATETIMEPICKER}
        component={DateTimePickerScreen}
      />
      <Stack.Screen name={ROUTES.CLIPBOARD} component={ClipboardScreen} />
      <Stack.Screen name={ROUTES.EXPANDER} component={ExpanderScreen} />
      <Stack.Screen name={ROUTES.CONFIG} component={ConfigScreen} />
      <Stack.Screen name={ROUTES.FS} component={FSScreen} />
      <Stack.Screen
        name={ROUTES.TEXT_TO_SPEECH}
        component={TextToSpeechScreen}
      />
      <Stack.Screen name={ROUTES.XAML} component={XamlScreen} />
      <Stack.Screen
        name={ROUTES.SKETCH_CANVAS}
        component={SketchCanvasScreen}
      />
      <Stack.Screen name={ROUTES.PDF} component={PdfScreen} />
    </Stack.Navigator>
  );
};
