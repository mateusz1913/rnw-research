import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Flyout, Pressable, Text, View } from 'react-native-windows';
import { Page } from '../components/Page';
import { Row } from '../components/Row';
import { COLORS } from '../constants/colors';

interface FlyoutRowProps {
  isModal?: boolean;
  label: string;
}

const FlyoutRow: React.FC<FlyoutRowProps> = ({ isModal, label }) => {
  const [isFlyoutVisible, setIsFlyoutVisible] = React.useState(false);

  return (
    <Row
      buttonLabel="Open flyout"
      label={label}
      onPress={() => setIsFlyoutVisible(true)}>
      <Flyout
        isOpen={isFlyoutVisible}
        isLightDismissEnabled={!isModal}
        isOverlayEnabled={isModal}
        onDismiss={() => setIsFlyoutVisible(false)}>
        <View style={styles.modal}>
          <Pressable onPress={() => setIsFlyoutVisible(false)}>
            <Text>Close flyout</Text>
          </Pressable>
        </View>
      </Flyout>
    </Row>
  );
};

export const FlyoutScreen: React.FC = () => {
  return (
    <Page>
      <FlyoutRow
        label="Modal flyout (replacement for not implemented Modal component)"
        isModal={true}
      />
      <FlyoutRow label="Popup flyout" />
    </Page>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT,
    borderColor: COLORS.PRIMARY,
    borderRadius: 10,
    borderWidth: 5,
    height: 300,
    justifyContent: 'center',
    width: 300,
  },
});
