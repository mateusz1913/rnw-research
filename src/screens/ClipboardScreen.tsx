// import Clipboard from '@react-native-clipboard/clipboard';
import * as React from 'react';
import {
  // NativeSyntheticEvent,
  // Pressable,
  StyleSheet,
  Text,
  // TextInput,
  // TextInputSubmitEditingEventData,
} from 'react-native';

import { Page } from '../components/Page';
import { COLORS } from '../constants/colors';

export const ClipboardScreen: React.FC = () => {
  // const [savedValue, setSavedValue] = React.useState<string | null>(null);
  // const [inputValue, setInputValue] = React.useState('');

  // const onSubmit = React.useCallback((submittedValue: string) => {
  //   Clipboard.setString(submittedValue);
  //   setInputValue('');
  //   setSavedValue(submittedValue);
  // }, []);

  // const onInputSubmit = React.useCallback(
  //   (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
  //     onSubmit(e.nativeEvent.text);
  //   },
  //   [onSubmit],
  // );

  // React.useEffect(() => {
  //   Clipboard.getString().then(value => {
  //     setSavedValue(value);
  //   });
  // }, []);

  return (
    <Page>
      <Text style={styles.header}>
        Does not work, throws following error after using{' '}
        <Text style={styles.headerValue}>setString</Text> method {'\n'}
        <Text style={styles.headerValue}>
          An unhandled exception (0x800401f0) occured in a native module.{'\n'}
          The exception message was: "CoInitialize has not been called.""
        </Text>
      </Text>
      {/* <Text style={styles.header}>
        Saved value: <Text style={styles.headerValue}>{savedValue}</Text>
      </Text>
      <TextInput
        onChangeText={setInputValue}
        onSubmitEditing={onInputSubmit}
        style={styles.input}
        value={inputValue}
      />
      <Pressable
        onPress={() => onSubmit(inputValue)}
        style={styles.submitButton}>
        <Text style={styles.submitButtonLabel}>Submit</Text>
      </Pressable> */}
    </Page>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  headerValue: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: COLORS.LIGHTER,
    borderColor: COLORS.DARKER,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 30,
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: COLORS.SUCCESS,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
  },
  submitButtonLabel: {
    fontSize: 28,
    textTransform: 'uppercase',
  },
});
