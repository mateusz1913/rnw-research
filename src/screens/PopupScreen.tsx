import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Popup } from 'react-native-windows';

import { Page } from '../components/Page';
import { Row } from '../components/Row';
import { COLORS } from '../constants/colors';

interface PopupRowProps {
  isModal?: boolean;
  label: string;
}

const PopupRow: React.FC<PopupRowProps> = ({ isModal, label }) => {
  const [isPopupVisible, setIsPopupVisible] = React.useState(false);

  return (
    <Row
      buttonLabel="Open popup"
      label={label}
      onPress={() => setIsPopupVisible(true)}>
      <Popup
        isOpen={isPopupVisible}
        isLightDismissEnabled={!isModal}
        onDismiss={() => setIsPopupVisible(false)}>
        <View style={styles.modal}>
          <Pressable onPress={() => setIsPopupVisible(false)}>
            <Text>Close popup</Text>
          </Pressable>
        </View>
      </Popup>
    </Row>
  );
};

export const PopupScreen: React.FC = () => {
  return (
    <Page>
      <PopupRow label="Popup control" />
      <PopupRow isModal={false} label="Popup control (light dismissable)" />
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
