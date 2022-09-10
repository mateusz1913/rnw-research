import * as React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial';

import { Page } from '../components/Page';
import { Row } from '../components/Row';

export const VectorIconsScreen: React.FC = () => {
  return (
    <Page>
      <Row label="Font Awesome icon">
        <FontAwesomeIcon name="windows" color="aqua" size={30} />
      </Row>
      <Row label="Material Community icon">
        <MaterialCommunityIcon name="gnome" color="darkgray" size={30} />
      </Row>
      <Row label="AntDesign icon">
        <AntDesignIcon name="apple1" color="lightgray" size={30} />
      </Row>
      <Row label="Zocial icon">
        <ZocialIcon name="android" color="lightgreen" size={30} />
      </Row>
    </Page>
  );
};
