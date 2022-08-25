import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Page } from '../components/Page';
import { Row } from '../components/Row';
import { ROUTES } from '../navigation/routes';
import { RootStackNavigationProp } from '../navigation/types';

interface VideoRowProps {
  label: string;
  hasBuiltInControls?: boolean;
}

const VideoRow: React.FC<VideoRowProps> = ({
  hasBuiltInControls = false,
  label,
}) => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const navigateToExample = React.useCallback(() => {
    navigation.navigate(ROUTES.VIDEO_PLAYER, { hasBuiltInControls });
  }, [hasBuiltInControls, navigation]);

  return (
    <Row buttonLabel="Open video" label={label} onPress={navigateToExample} />
  );
};

export const VideoScreen: React.FC = () => {
  return (
    <Page containerStyle={styles.container} isScrolledPage={false}>
      <VideoRow hasBuiltInControls={true} label="Built-in controls" />
      <VideoRow hasBuiltInControls={false} label="Custom controls" />
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
  },
});
