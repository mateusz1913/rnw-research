import * as React from 'react';
import { Button } from 'react-native';
import TTS from 'react-native-tts';

import { Page } from '../components/Page';

export const TextToSpeechScreen: React.FC = () => {
  const speak = React.useCallback(() => {
    TTS.speak('I am text to speech voice');
  }, []);

  return (
    <Page>
      <Button onPress={speak} title="Speak" />
    </Page>
  );
};
