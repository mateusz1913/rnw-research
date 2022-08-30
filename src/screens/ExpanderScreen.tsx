import { Expander } from '@fluentui-react-native/experimental-expander';
import * as React from 'react';
import { Text, View } from 'react-native';

import { Page } from '../components/Page';

export const ExpanderScreen: React.FC = () => {
  return (
    <Page>
      {/** @ts-ignore */}
      <Expander expandedHeight={600} collapsedHeight={300}>
        <View>
          <Text>Header text</Text>
          <Text>Sub header text that is longer</Text>
        </View>
        <View>
          <Text>Content text</Text>
          <Text>And here is the content</Text>
        </View>
      </Expander>
    </Page>
  );
};
