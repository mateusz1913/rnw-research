import * as React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Page } from '../components/Page';
import { COLORS } from '../constants/colors';

export const LinearGradientScreen: React.FC = () => {
  return (
    <Page containerStyle={styles.container} isScrolledPage={false}>
      <LinearGradient
        colors={[COLORS.SECONDARY, COLORS.SUCCESS]}
        locations={[0.3, 0.8]}
        style={styles.gradient}
      />
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
  },
  gradient: {
    alignSelf: 'stretch',
    flex: 1,
    margin: 20,
  },
});
