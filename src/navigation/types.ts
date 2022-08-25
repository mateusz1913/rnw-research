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
  [ROUTES.VIDEO_AUDIO]: undefined;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

export type VideoPlayerRouteProp = RouteProp<
  RootStackParamList,
  typeof ROUTES.VIDEO_PLAYER
>;
