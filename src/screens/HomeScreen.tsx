import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useColorScheme, Text, StyleSheet, Pressable } from 'react-native';
import { Page } from '../components/Page';
import { COLORS } from '../constants/colors';
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
      return () => navigation.navigate(route);
    },
    [navigation],
  );

  return (
    <Page>
      <Section title="Step One">
        Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen
        and then come back to see your edits.
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
        Check Flyout examples (Modal specific components in RNW)
      </Section>
      <Section onPress={navigateTo(ROUTES.VIDEO_AUDIO)} title="AudioVideo">
        Listen audio with native component from react-native-video
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
