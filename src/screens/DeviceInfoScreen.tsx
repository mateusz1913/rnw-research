import * as React from 'react';
import DeviceInfo from 'react-native-device-info';

import { Page } from '../components/Page';
import { Row } from '../components/Row';

export const DeviceInfoScreen: React.FC = () => {
  const [deviceInfo] = React.useState(() => ({
    baseOs: DeviceInfo.getBaseOsSync(),
    deviceName: DeviceInfo.getDeviceNameSync(),
    brightness: DeviceInfo.getBrightnessSync(),
    isMouseConnected: DeviceInfo.isMouseConnectedSync(),
    isKeyboardConnected: DeviceInfo.isKeyboardConnectedSync(),
    isCameraPresent: DeviceInfo.isCameraPresentSync(),
  }));

  return (
    <Page>
      {Object.entries(deviceInfo).map(([k, v]) => {
        return <Row key={k} label={k} value={`${v}`} />;
      })}
    </Page>
  );
};
