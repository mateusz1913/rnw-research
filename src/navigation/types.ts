import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ROUTES } from './routes';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.LOCALIZE]: undefined;
  [ROUTES.WEBVIEW]: undefined;
  [ROUTES.CHECKBOX]: undefined;
  [ROUTES.VIDEO]: undefined;
  [ROUTES.VIDEO_PLAYER]: {
    hasBuiltInControls: boolean;
  };
  [ROUTES.FLYOUT]: undefined;
  [ROUTES.POPUP]: undefined;
  [ROUTES.PLATFORM_COLOR]: undefined;
  [ROUTES.VIDEO_AUDIO]: undefined;
  [ROUTES.ASYNC_STORAGE]: undefined;
  [ROUTES.SENSITIVE_INFO]: undefined;
  [ROUTES.TRACK_PLAYER_AUDIO]: undefined;
  [ROUTES.PRINT]: undefined;
  [ROUTES.PERMISSIONS]: undefined;
  [ROUTES.CAMERA]: undefined;
  [ROUTES.LINEAR_GRADIENT]: undefined;
  [ROUTES.DEVICE_INFO]: undefined;
  [ROUTES.SLIDER]: undefined;
  [ROUTES.PROGRESS_VIEW]: undefined;
  [ROUTES.NETINFO]: undefined;
  [ROUTES.DATETIMEPICKER]: undefined;
  [ROUTES.CONFIG]: undefined;
  [ROUTES.CLIPBOARD]: undefined;
  [ROUTES.EXPANDER]: undefined;
  [ROUTES.BLOB_UTIL]: undefined;
  [ROUTES.FS]: undefined;
  [ROUTES.TEXT_TO_SPEECH]: undefined;
  [ROUTES.XAML]: undefined;
  [ROUTES.SKETCH_CANVAS]: undefined;
  [ROUTES.PDF]: undefined;
  [ROUTES.WINRT]: undefined;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

export type VideoPlayerRouteProp = RouteProp<
  RootStackParamList,
  typeof ROUTES.VIDEO_PLAYER
>;
