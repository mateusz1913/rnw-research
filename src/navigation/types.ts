import { StackNavigationProp } from '@react-navigation/stack';
import { ROUTES } from './routes';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.LOCALIZE]: undefined;
  [ROUTES.WEBVIEW]: undefined;
  [ROUTES.CHECKBOX]: undefined;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
