import * as React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { check, PERMISSIONS, request } from 'react-native-permissions';

import { Page } from '../components/Page';
import { COLORS } from '../constants/colors';

export const PermissionsScreen: React.FC = () => {
  const [isGranted, setIsGranted] = React.useState<boolean | null>(null);

  const requestPermission = React.useCallback(() => {
    request(PERMISSIONS.WINDOWS.DOCUMENTS_LIBRARY, {
      title: 'Documents library permission',
      message: 'App wants to access documents library',
      buttonPositive: 'Sure',
      buttonNegative: 'Forget about it',
      buttonNeutral: 'Ask later',
    }).then(result => {
      setIsGranted(result === 'granted');
    });
  }, []);

  React.useEffect(() => {
    for (const [, v] of Object.entries(PERMISSIONS.WINDOWS)) {
      check(v).then(result => {
        console.log({ [v]: result });
      });
    }
    check(PERMISSIONS.WINDOWS.DOCUMENTS_LIBRARY).then(result => {
      console.log({ result });
      setIsGranted(result === 'granted');
    });
  }, []);

  return (
    <Page>
      <Text style={styles.header}>
        Saved value:{' '}
        <Text style={styles.headerValue}>
          {isGranted === null
            ? 'Not ready'
            : !isGranted
            ? 'Not granted'
            : 'Granted'}
        </Text>
      </Text>
      <Pressable onPress={requestPermission} style={styles.submitButton}>
        <Text style={styles.submitButtonLabel}>
          Request documents library permission
        </Text>
      </Pressable>
    </Page>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    marginHorizontal: 24,
    marginVertical: 6,
  },
  headerValue: {
    fontWeight: 'bold',
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: COLORS.SUCCESS,
    borderRadius: 12,
    justifyContent: 'center',
    marginHorizontal: 30,
    marginVertical: 12,
    padding: 12,
  },
  submitButtonLabel: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
});
