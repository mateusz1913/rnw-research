import { ProgressView } from '@react-native-community/progress-view';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Page } from '../components/Page';
import { Row } from '../components/Row';
import { COLORS } from '../constants/colors';

export const ProgressViewScreen: React.FC = () => {
  return (
    <Page>
      <Row label="Default">
        <ProgressView
          progress={0.5}
          progressViewStyle="default"
          style={styles.progressView}
        />
      </Row>
      <Row label="Indeterminate">
        <ProgressView
          // @ts-ignore
          isIndeterminate={true}
          progress={0.5}
          progressViewStyle="default"
          style={styles.progressView}
        />
      </Row>
      <Row label="Bar">
        <ProgressView
          progress={0.5}
          progressViewStyle="bar"
          style={styles.progressView}
        />
      </Row>
      <Row label="Colored">
        <ProgressView
          progress={0.5}
          progressTintColor={COLORS.SUCCESS}
          progressViewStyle="default"
          style={styles.progressView}
          trackTintColor={COLORS.PRIMARY}
        />
      </Row>
    </Page>
  );
};

const styles = StyleSheet.create({
  progressView: {
    height: 10,
    margin: 30,
    width: 300,
  },
});
