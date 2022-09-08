import * as React from 'react';
import { NativeSyntheticEvent, StyleProp, ViewStyle } from 'react-native';

import { NativeToggleButton } from './NativeToggleButton';

export interface ToggleButtonClickEvent {
  isChecked: boolean | null;
}

export interface ToggleButtonProps {
  disabled?: boolean;
  isChecked?: boolean | null;
  isThreeState?: boolean;
  onPress: (e: NativeSyntheticEvent<ToggleButtonClickEvent>) => void;
  style?: StyleProp<ViewStyle>;
  title: string;
}

export class ToggleButton extends React.Component<ToggleButtonProps> {
  render(): React.ReactNode {
    return <NativeToggleButton {...this.props} />;
  }
}
