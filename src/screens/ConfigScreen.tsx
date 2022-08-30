import * as React from 'react';
import Config from 'react-native-config';

import { Page } from '../components/Page';
import { Row } from '../components/Row';

export const ConfigScreen: React.FC = () => {
  return (
    <Page>
      <Row label="Environment value" value={Config.ENV_VAR} />
    </Page>
  );
};
