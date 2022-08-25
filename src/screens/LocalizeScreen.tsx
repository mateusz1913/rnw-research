import * as React from 'react';
import * as RNLocalize from 'react-native-localize';
import { Page } from '../components/Page';
import { Row } from '../components/Row';

interface LocalizeRowProps {
  name: string;
  value: any;
}

const LocalizeRow: React.FC<LocalizeRowProps> = ({ name, value }) => (
  <Row label={name} value={JSON.stringify(value, null, 2)} />
);

export const LocalizeScreen: React.FC = () => {
  return (
    <Page>
      <LocalizeRow
        name="RNLocalize.getLocales()"
        value={RNLocalize.getLocales()}
      />
      <LocalizeRow
        name="RNLocalize.getCurrencies()"
        value={RNLocalize.getCurrencies()}
      />
      <LocalizeRow
        name="RNLocalize.getCountry()"
        value={RNLocalize.getCountry()}
      />
      <LocalizeRow
        name="RNLocalize.getCalendar()"
        value={RNLocalize.getCalendar()}
      />
      <LocalizeRow
        name="RNLocalize.getNumberFormatSettings()"
        value={RNLocalize.getNumberFormatSettings()}
      />
      <LocalizeRow
        name="RNLocalize.getTemperatureUnit()"
        value={RNLocalize.getTemperatureUnit()}
      />
      <LocalizeRow
        name="RNLocalize.getTimeZone()"
        value={RNLocalize.getTimeZone()}
      />
      <LocalizeRow
        name="RNLocalize.uses24HourClock()"
        value={RNLocalize.uses24HourClock()}
      />
      <LocalizeRow
        name="RNLocalize.usesMetricSystem()"
        value={RNLocalize.usesMetricSystem()}
      />
      <LocalizeRow
        name="RNLocalize.findBestAvailableLanguage(['en-US', 'en', 'fr'])"
        value={RNLocalize.findBestAvailableLanguage(['en-US', 'en', 'fr'])}
      />
    </Page>
  );
};
