import RNSketchCanvas from '@wwimmo/react-native-sketch-canvas';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Page } from '../components/Page';
import { COLORS } from '../constants/colors';

export const SketchCanvasScreen: React.FC = () => {
  return (
    <Page>
      <View style={styles.wrapper}>
        <RNSketchCanvas
          containerStyle={styles.container}
          canvasStyle={styles.container}
          undoComponent={
            <View style={[styles.functionButton, styles.button]}>
              <Text style={styles.label}>Undo</Text>
            </View>
          }
          clearComponent={
            <View style={[styles.functionButton, styles.button]}>
              <Text style={styles.label}>Clear</Text>
            </View>
          }
          eraseComponent={
            <View style={[styles.functionButton, styles.button]}>
              <Text style={styles.label}>Eraser</Text>
            </View>
          }
          strokeComponent={color => (
            <View
              style={[styles.strokeColorButton, { backgroundColor: color }]}
            />
          )}
          strokeSelectedComponent={color => (
            <View
              style={[
                styles.strokeColorButton,
                styles.strokeSelectedButton,
                { backgroundColor: color },
              ]}
            />
          )}
          defaultStrokeIndex={0}
          defaultStrokeWidth={5}
        />
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMARY,
  },
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  functionButton: {
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 2,
    marginVertical: 8,
    justifyContent: 'center',
    padding: 5,
  },
  label: {
    color: COLORS.WHITE,
  },
  strokeColorButton: {
    borderRadius: 15,
    height: 30,
    marginHorizontal: 2,
    marginVertical: 8,
    width: 30,
  },
  strokeSelectedButton: {
    borderWidth: 2,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 600,
  },
});
