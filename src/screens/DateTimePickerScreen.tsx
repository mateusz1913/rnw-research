import DateTimePicker from '@react-native-community/datetimepicker';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Page } from '../components/Page';
import { Row } from '../components/Row';

export const DateTimePickerScreen: React.FC = () => {
  const [dateValue, setDateValue] = React.useState(new Date());
  const [timeValue, setTimeValue] = React.useState(new Date());

  return (
    <Page>
      <Row label="Date picker">
        <DateTimePicker
          mode="date"
          value={dateValue}
          onChange={(_, selectedDate) => {
            const newDate = selectedDate || dateValue;

            setDateValue(newDate);
          }}
          style={styles.datetimepicker}
          firstDayOfWeek={1}
          dateFormat="day month year"
          placeholderText="Select date"
        />
      </Row>
      <Row label="Time picker">
        <DateTimePicker
          mode="time"
          value={dateValue}
          onChange={(_, selectedTime) => {
            const newTime = selectedTime || timeValue;

            setTimeValue(newTime);
          }}
          style={styles.datetimepicker}
          is24Hour={true}
          minuteInterval={5}
          placeholderText="Select time"
        />
      </Row>
    </Page>
  );
};

const styles = StyleSheet.create({
  datetimepicker: {
    height: 50,
    margin: 20,
    width: 400,
  },
});
