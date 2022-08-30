import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { Page } from '../components/Page';

export const CameraScreen: React.FC = () => {
  return (
    <Page containerStyle={styles.container} isScrolledPage={false}>
      <RNCamera
        type="front"
        style={styles.camera}
        pendingAuthorizationView={
          <View style={styles.container}>
            <Text>You have to grant camera permissions</Text>
          </View>
        }
        notAuthorizedView={
          <View style={styles.container}>
            <Text>Camera permissions not granted</Text>
          </View>
        }
      />
    </Page>
  );
};

const styles = StyleSheet.create({
  camera: {
    alignSelf: 'stretch',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
});
