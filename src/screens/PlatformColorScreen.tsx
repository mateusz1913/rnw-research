import * as React from 'react';
import { PlatformColor, StyleSheet, Text, View } from 'react-native';

import { Page } from '../components/Page';
import { Row } from '../components/Row';

export const PlatformColorScreen: React.FC = () => {
  return (
    <Page>
      <Row label="SystemControlPageTextBaseHighBrush">
        <Text style={styles.systemControlPageTextBaseHighBrush}>
          Colored text
        </Text>
      </Row>
      <Row label="SystemAccentColorLight3">
        <View style={styles.systemAccentColorLight3} />
      </Row>
      <Row label="SystemControlAcrylicWindowBrush">
        <View style={styles.systemControlAcrylicWindowBrush} />
      </Row>
      <Row label="SystemControlBackgroundAccentRevealBorderBrush">
        <View style={styles.systemControlBackgroundAccentRevealBorderBrush} />
      </Row>
    </Page>
  );
};

const styles = StyleSheet.create({
  systemControlPageTextBaseHighBrush: {
    color: PlatformColor('SystemControlPageTextBaseHighBrush'),
    fontSize: 22,
    fontWeight: 'bold',
  },
  systemAccentColorLight3: {
    backgroundColor: PlatformColor('SystemAccentColorLight3'),
    height: 100,
    width: 100,
  },
  systemControlAcrylicWindowBrush: {
    backgroundColor: PlatformColor('SystemControlAcrylicWindowBrush'),
    height: 100,
    width: 100,
  },
  systemControlBackgroundAccentRevealBorderBrush: {
    backgroundColor: PlatformColor(
      'SystemControlBackgroundAccentRevealBorderBrush',
    ),
    height: 100,
    width: 100,
  },
});
