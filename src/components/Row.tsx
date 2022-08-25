import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../constants/colors';

interface RowProps {
  buttonLabel?: string;
  label: string;
  onPress?: () => void;
  value?: string;
}

export const Row: React.FC<React.PropsWithChildren<RowProps>> = ({
  buttonLabel,
  children,
  label,
  onPress,
  value,
}) => {
  return (
    <View style={styles.row}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.rowContainer}>
        {children}
        {onPress ? (
          <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonLabel}>{buttonLabel}</Text>
          </Pressable>
        ) : value ? (
          <Text style={styles.value}>{value}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 10,
    padding: 10,
  },
  buttonLabel: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  label: {
    fontSize: 32,
  },
  row: {
    alignItems: 'center',
    borderColor: COLORS.DARK,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  rowContainer: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  value: {
    fontSize: 20,
  },
});
