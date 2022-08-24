import * as React from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  useColorScheme,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/colors';

interface PageProps {
  isScrolledPage?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  scrollContainerStyle?: StyleProp<ViewStyle>;
  scrollContentContainerStyle?: StyleProp<ViewStyle>;
}

export const Page: React.FC<React.PropsWithChildren<PageProps>> = ({
  children,
  containerStyle,
  isScrolledPage = true,
  scrollContainerStyle,
  scrollContentContainerStyle,
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[
        isDarkMode ? styles.darkBackground : styles.lightBackground,
        containerStyle,
      ]}>
      {!isScrolledPage ? (
        children
      ) : (
        <ScrollView
          contentContainerStyle={scrollContentContainerStyle}
          contentInsetAdjustmentBehavior="automatic"
          style={[
            isDarkMode ? styles.darkBackground : styles.lightBackground,
            scrollContainerStyle,
          ]}>
          {children}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  darkBackground: {
    backgroundColor: COLORS.DARKER,
  },
  lightBackground: {
    backgroundColor: COLORS.LIGHTER,
  },
});
