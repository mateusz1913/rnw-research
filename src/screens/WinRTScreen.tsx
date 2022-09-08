import * as React from 'react';
import { Text } from 'react-native';

import { Page } from '../components/Page';
import { Row } from '../components/Row';

const CryptographicBuffer = Windows.Security.Cryptography.CryptographicBuffer;

export const WinRTScreen: React.FC = () => {
  const [randomBytes, setRandomBytes] = React.useState<string | null>(null);

  const genereateSecureRandom = React.useCallback(() => {
    const buffer = CryptographicBuffer.generateRandom(1024);

    setRandomBytes(CryptographicBuffer.encodeToHexString(buffer));
  }, []);

  return (
    <Page>
      <Row
        label="Generate Random Bytes with WinRT API"
        buttonLabel="Generate"
        onPress={genereateSecureRandom}>
        {randomBytes !== null ? <Text>{randomBytes}</Text> : null}
      </Row>
    </Page>
  );
};
