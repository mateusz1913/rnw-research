import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useColorScheme, Text, StyleSheet, Pressable } from 'react-native';
import { Page } from '../components/Page';
import { COLORS } from '../constants/colors';
import { NativeNavigationModule } from '../nativeModules/NativeNavigationModule';
import { ROUTES } from '../navigation/routes';
import { RootStackNavigationProp } from '../navigation/types';

const Section: React.FC<
  React.PropsWithChildren<{
    onPress?: () => void;
    title: string;
  }>
> = ({ children, onPress, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Pressable onPress={onPress} style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? COLORS.WHITE : COLORS.BLACK,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? COLORS.LIGHT : COLORS.DARK,
          },
        ]}>
        {children}
      </Text>
    </Pressable>
  );
};

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const navigateTo = React.useCallback(
    (
      route: Exclude<
        typeof ROUTES[keyof typeof ROUTES],
        typeof ROUTES.VIDEO_PLAYER
      >,
    ) => {
      // @ts-ignore
      return () => navigation.navigate(route);
    },
    [navigation],
  );

  const navigateToNativeScreen = React.useCallback(() => {
    NativeNavigationModule.navigateToNativePage();
  }, []);

  return (
    <Page>
      <Section title="Step One">
        Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen
        and then come back to see your edits.
      </Section>
      <Section onPress={navigateTo(ROUTES.XAML)} title="XAML">
        Check all XAML controls with react-native-xaml
      </Section>
      <Section onPress={navigateTo(ROUTES.LOCALIZE)} title="Localize">
        Check react-native-localize library
      </Section>
      <Section onPress={navigateTo(ROUTES.WEBVIEW)} title="WebView">
        Check WebView component with react-native-webview
      </Section>
      <Section onPress={navigateTo(ROUTES.CHECKBOX)} title="Checkbox">
        Try Checkbox component from @react-native-community/checkbox
      </Section>
      <Section onPress={navigateTo(ROUTES.VIDEO)} title="Video">
        Watch video presented with native component from react-native-video
      </Section>
      <Section onPress={navigateTo(ROUTES.FLYOUT)} title="Flyout">
        Check Flyout control examples (Modal specific components in RNW)
      </Section>
      <Section onPress={navigateTo(ROUTES.POPUP)} title="Popup">
        Check Popup examples
      </Section>
      <Section
        onPress={navigateTo(ROUTES.PLATFORM_COLOR)}
        title="PlatformColor">
        Look at PlatformColor examples
      </Section>
      <Section onPress={navigateTo(ROUTES.VIDEO_AUDIO)} title="AudioVideo">
        Listen audio with native component from react-native-video
      </Section>
      <Section onPress={navigateTo(ROUTES.ASYNC_STORAGE)} title="AsyncStorage">
        Look how AsyncStorage can be used to persist data
      </Section>
      <Section
        onPress={navigateTo(ROUTES.SENSITIVE_INFO)}
        title="SensitiveInfo">
        Use react-native-sensitive-info to store credentials in secure way
      </Section>
      <Section
        onPress={navigateTo(ROUTES.TRACK_PLAYER_AUDIO)}
        title="TrackPlayerAudio">
        Listen to tracks queue with react-native-track-player
      </Section>
      <Section onPress={navigateTo(ROUTES.PRINT)} title="Print">
        Check how to print content with react-native-print
      </Section>
      <Section onPress={navigateTo(ROUTES.PERMISSIONS)} title="Permissions">
        Try requesting some permissions with react-native-permissions
      </Section>
      <Section onPress={navigateTo(ROUTES.CAMERA)} title="Camera">
        Look how camera can be accessed in UWP app with react-native-camera
      </Section>
      <Section
        onPress={navigateTo(ROUTES.LINEAR_GRADIENT)}
        title="Linear Gradient">
        See how linear gradients can be displayed with
        react-native-linear-gradient
      </Section>
      <Section onPress={navigateTo(ROUTES.DEVICE_INFO)} title="Device Info">
        Check device's info with react-native-device-info
      </Section>
      <Section onPress={navigateTo(ROUTES.BLOB_UTIL)} title="Blob util">
        Try file system with react-native-blob-util
      </Section>
      <Section onPress={navigateTo(ROUTES.SLIDER)} title="Slider">
        Use slider component from @react-native-community/slider
      </Section>
      <Section onPress={navigateTo(ROUTES.PROGRESS_VIEW)} title="Progress view">
        Use progress view component from
        @react-native-progress-view/progress-view
      </Section>
      <Section onPress={navigateTo(ROUTES.NETINFO)} title="NetInfo">
        Check internet connection details with @react-native-community/netinfo
      </Section>
      <Section
        onPress={navigateTo(ROUTES.DATETIMEPICKER)}
        title="DateTimePicker">
        Use date and time picker controls from
        @react-native-community/datetimepicker
      </Section>
      <Section onPress={navigateTo(ROUTES.CLIPBOARD)} title="Clipboard">
        Access native clipboard with @react-native-clipboard/clipboard
      </Section>
      <Section onPress={navigateTo(ROUTES.EXPANDER)} title="Expander">
        Check expander control from @fluentui-react-native/experimental-expander
      </Section>
      <Section onPress={navigateTo(ROUTES.CONFIG)} title="Config">
        Use environment values with react-native-config
      </Section>
      <Section onPress={navigateTo(ROUTES.FS)} title="FS">
        Try file system with react-native-fs
      </Section>
      <Section
        onPress={navigateTo(ROUTES.TEXT_TO_SPEECH)}
        title="Text-to-speech">
        Try text-to-speech with react-native-tts
      </Section>
      <Section onPress={navigateTo(ROUTES.SKETCH_CANVAS)} title="Sketch Canvas">
        Try canvas sketch with @wwimmo/react-native-sketch-canvas
      </Section>
      <Section onPress={navigateTo(ROUTES.PDF)} title="Pdf">
        Check Pdf view control with react-native-pdf
      </Section>
      <Section onPress={navigateTo(ROUTES.WINRT)} title="WinRT">
        Access native WinRT APIs projection with react-native-winrt
      </Section>
      <Section
        onPress={navigateToNativeScreen}
        title="Navigation to native screen">
        Navigate to native XAML page (outside React Native RootView)
      </Section>
      <Section
        onPress={navigateTo(ROUTES.NATIVE_TOGGLE_BUTTON)}
        title="Native ToggleButton">
        Check ToggleButton control bridged as a native view
      </Section>
      <Section onPress={navigateTo(ROUTES.SVG)} title="SVG">
        Try SVG with react-native-svg
      </Section>
      <Section onPress={navigateTo(ROUTES.VECTOR_ICONS)} title="Vector icons">
        Try vector icons with react-native-vector-icons
      </Section>
    </Page>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 16,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
