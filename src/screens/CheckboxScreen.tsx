import CheckBox from '@react-native-community/checkbox';
import * as React from 'react';

import { COLORS } from '../constants/colors';
import { Page } from '../components/Page';
import { Row } from '../components/Row';

interface CheckboxRowProps {
  disabled?: boolean;
  label: string;
}

const CheckboxRow: React.FC<CheckboxRowProps> = ({ disabled, label }) => {
  const [value, setValue] = React.useState(false);

  return (
    <Row label={label}>
      <CheckBox
        disabled={disabled}
        onCheckColor={COLORS.ERROR}
        onFillColor={COLORS.SECONDARY}
        onTintColor={COLORS.TERTIARY}
        onValueChange={setValue}
        tintColor={COLORS.SUCCESS}
        value={value}
      />
    </Row>
  );
};

export const CheckboxScreen: React.FC = () => {
  return (
    <Page>
      <CheckboxRow label="Checkbox with colors" />
      <CheckboxRow label="Disabled" disabled={true} />
    </Page>
  );
};
