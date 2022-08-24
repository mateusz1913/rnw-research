import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import { Page } from '../components/Page';

interface LineProps {
  name: string;
  value: any;
}

const Line: React.FC<LineProps> = props => (
  <View style={styles.block}>
    <Text style={styles.name}>{props.name}</Text>
    <Text style={styles.value}>{JSON.stringify(props.value, null, 2)}</Text>
  </View>
);

export const LocalizeScreen: React.FC = () => {
  return (
    <Page>
      <Line name="RNLocalize.getLocales()" value={RNLocalize.getLocales()} />
      <Line
        name="RNLocalize.getCurrencies()"
        value={RNLocalize.getCurrencies()}
      />
      <Line name="RNLocalize.getCountry()" value={RNLocalize.getCountry()} />
      <Line name="RNLocalize.getCalendar()" value={RNLocalize.getCalendar()} />
      <Line
        name="RNLocalize.getNumberFormatSettings()"
        value={RNLocalize.getNumberFormatSettings()}
      />
      <Line
        name="RNLocalize.getTemperatureUnit()"
        value={RNLocalize.getTemperatureUnit()}
      />
      <Line name="RNLocalize.getTimeZone()" value={RNLocalize.getTimeZone()} />
      <Line
        name="RNLocalize.uses24HourClock()"
        value={RNLocalize.uses24HourClock()}
      />
      <Line
        name="RNLocalize.usesMetricSystem()"
        value={RNLocalize.usesMetricSystem()}
      />
      <Line
        name="RNLocalize.findBestAvailableLanguage(['en-US', 'en', 'fr'])"
        value={RNLocalize.findBestAvailableLanguage(['en-US', 'en', 'fr'])}
      />
    </Page>
  );
};

const styles = StyleSheet.create({
  block: {
    marginBottom: 16,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  name: {
    textDecorationLine: 'underline',
    fontWeight: '500',
    marginBottom: 8,
    color: 'black',
  },
  value: {
    textAlign: 'left',
    color: 'black',
  },
});
