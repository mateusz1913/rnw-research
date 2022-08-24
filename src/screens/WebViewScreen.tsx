import * as React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { Page } from '../components/Page';
import { COLORS } from '../constants/colors';

const Loading: React.FC = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator animating={true} color={COLORS.PRIMARY} size="large" />
    </View>
  );
};

export const WebViewScreen: React.FC = () => {
  const webviewRef = React.useRef<WebView>(null);

  return (
    <Page containerStyle={styles.container} isScrolledPage={false}>
      <WebView
        ref={webviewRef}
        containerStyle={styles.webview}
        renderLoading={() => <Loading />}
        source={{ uri: 'https://reactnative.dev/' }}
        style={styles.webview}
      />
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
  },
  loading: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  webview: {
    alignSelf: 'stretch',
    flex: 1,
  },
});
