import * as React from 'react';
import { NativeSyntheticEvent, StyleSheet } from 'react-native';

import { Page } from '../components/Page';
import { Row } from '../components/Row';
import {
  ToggleButton,
  ToggleButtonClickEvent,
} from '../nativeViews/ToggleButton';

export const ToggleButtonScreen: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState<boolean | null>(null);

  const handleClick = React.useCallback(
    (e: NativeSyntheticEvent<ToggleButtonClickEvent>) => {
      console.log(e.nativeEvent);
    },
    [],
  );

  const handleControlledClick = React.useCallback(
    (e: NativeSyntheticEvent<ToggleButtonClickEvent>) => {
      setIsChecked(e.nativeEvent.isChecked);
    },
    [],
  );

  const checkControlledToggleButton = React.useCallback(() => {
    setIsChecked(true);
  }, []);

  return (
    <Page>
      <Row label="Toggle button">
        <ToggleButton
          onPress={handleClick}
          style={styles.toggleButton}
          title="Click me!"
        />
      </Row>
      <Row label="Three-state toggle button">
        <ToggleButton
          isThreeState
          onPress={handleClick}
          style={styles.toggleButton}
          title="Click me!"
        />
      </Row>
      <Row label="Controlled toggle button">
        <ToggleButton
          isChecked={isChecked}
          onPress={handleControlledClick}
          style={styles.toggleButton}
          title="Click me!"
        />
      </Row>
      <Row label="Check above toggle button by clicking this toggle button">
        <ToggleButton
          onPress={checkControlledToggleButton}
          style={styles.toggleButton}
          title="Click me!"
        />
      </Row>
    </Page>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    height: 100,
    width: 200,
  },
});
