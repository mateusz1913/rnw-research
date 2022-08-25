import * as React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';
import { audioMP3 } from '../../assets';

import { Page } from '../components/Page';

export const VideoAudioScreen: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = React.useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  return (
    <Page>
      <Pressable onPress={togglePlay} style={styles.button}>
        <Text style={styles.buttonLabel}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </Pressable>
      <Video volume={1} paused={!isPlaying} source={audioMP3} />
    </Page>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
  },
  buttonLabel: {
    fontSize: 32,
    textTransform: 'uppercase',
  },
});
