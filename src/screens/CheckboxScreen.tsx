import CheckBox from '@react-native-community/checkbox';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Page } from '../components/Page';
import { COLORS } from '../constants/colors';

interface RowProps {
  disabled?: boolean;
  label: string;
}

const Row: React.FC<RowProps> = ({ disabled, label }) => {
  const [value, setValue] = React.useState(false);

  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.spacer} />
      <CheckBox
        disabled={disabled}
        onCheckColor={COLORS.ERROR}
        onFillColor={COLORS.SECONDARY}
        onTintColor={COLORS.TERTIARY}
        onValueChange={setValue}
        tintColor={COLORS.SUCCESS}
        value={value}
      />
    </View>
  );
};

export const CheckboxScreen: React.FC = () => {
  return (
    <Page>
      <Row label="Checkbox with colors" />
      <Row label="Disabled" disabled={true} />
    </Page>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 32,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  spacer: {
    width: 30,
  },
});
