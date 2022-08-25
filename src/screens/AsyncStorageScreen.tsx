import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
} from 'react-native';

import { Page } from '../components/Page';
import { COLORS } from '../constants/colors';

const SAVED_ITEM_KEY = 'SAVED_ITEM_KEY';

export const AsyncStorageScreen: React.FC = () => {
  const [savedValue, setSavedValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState('');

  const onSubmit = React.useCallback((submittedValue: string) => {
    AsyncStorage.setItem(SAVED_ITEM_KEY, submittedValue).then(() => {
      setInputValue('');
      setSavedValue(submittedValue);
    });
  }, []);

  const onInputSubmit = React.useCallback(
    (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
      onSubmit(e.nativeEvent.text);
    },
    [onSubmit],
  );

  React.useEffect(() => {
    AsyncStorage.getItem(SAVED_ITEM_KEY).then(value => {
      setSavedValue(value);
    });
  }, []);

  return (
    <Page>
      <Text style={styles.header}>
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
      </Pressable>
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
