import Slider from '@react-native-community/slider';
import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Page } from '../components/Page';
import { Row } from '../components/Row';
import { COLORS } from '../constants/colors';

export const SliderScreen: React.FC = () => {
  const [horizontalValue, setHorizontalValue] = React.useState(1);
  const [verticalValue, setVerticalValue] = React.useState(1);
  const [coloredValue, setColoredValue] = React.useState(1);

  return (
    <Page>
      <Row label="Horizontal slider">
        <Slider
          maximumValue={10}
          minimumValue={1}
          onValueChange={setHorizontalValue}
          step={1}
          style={styles.horizontalSlider}
          value={horizontalValue}
        />
        <Text>value: {horizontalValue}/10</Text>
      </Row>
      <Row label="Horizontal slider">
        <Slider
          maximumValue={10}
          minimumValue={1}
          onSlidingComplete={setVerticalValue}
          step={1}
          style={styles.verticalSlider}
          value={verticalValue}
          vertical={true}
        />
        <Text>value: {verticalValue}/10</Text>
      </Row>
      <Row label="Colored inverted slider">
        <Slider
          inverted={true}
          maximumTrackTintColor={COLORS.TERTIARY}
          maximumValue={10}
          minimumTrackTintColor={COLORS.SECONDARY}
          minimumValue={1}
          onValueChange={setColoredValue}
          step={1}
          style={styles.horizontalSlider}
          thumbTintColor={COLORS.ERROR}
          value={coloredValue}
        />
        <Text>value: {coloredValue}/10</Text>
      </Row>
    </Page>
  );
};

const styles = StyleSheet.create({
  horizontalSlider: {
    height: 60,
    margin: 30,
    width: 300,
  },
  verticalSlider: {
    height: 300,
    margin: 30,
    width: 60,
  },
});
