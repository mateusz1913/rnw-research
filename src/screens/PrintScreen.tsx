import * as React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import RNPrint from 'react-native-print';

import { Page } from '../components/Page';
import { COLORS } from '../constants/colors';

export const PrintScreen: React.FC = () => {
  const printHTML = React.useCallback(() => {
    RNPrint.print({
      html: '<h1>Custom converted PDF Document</h1>',
    });
  }, []);
  const printRemote = React.useCallback(() => {
    RNPrint.print({
      filePath:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    });
  }, []);

  return (
    <Page>
      <Pressable onPress={printHTML} style={styles.printButton}>
        <Text style={styles.printButtonLabel}>Print HTML content</Text>
      </Pressable>
      <Pressable onPress={printRemote} style={styles.printButton}>
        <Text style={styles.printButtonLabel}>Print remote content</Text>
      </Pressable>
    </Page>
  );
};

const styles = StyleSheet.create({
  printButton: {
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 30,
    marginVertical: 20,
    padding: 5,
  },
  printButtonLabel: {
    color: COLORS.WHITE,
    fontSize: 26,
    textTransform: 'uppercase',
  },
});
