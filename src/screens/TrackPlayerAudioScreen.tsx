// import Slider from '@react-native-community/slider';
import * as React from 'react';
import {
  // ActivityIndicator,
  // Image,
  // Pressable,
  StyleSheet,
  Text,
  // View,
} from 'react-native';
// import TrackPlayer, {
//   RepeatMode,
//   State,
//   Track,
//   usePlaybackState,
//   useProgress,
// } from 'react-native-track-player';

// import { audioMP3 } from '../../assets';

import { Page } from '../components/Page';
import { COLORS } from '../constants/colors';
// import { useCurrentTrack } from '../hooks/useCurrentTrack';
// import { useOnTogglePlayback } from '../hooks/useOnTogglePlayback';
// import { SetupService } from '../services/SetupService';

// const track1: Track = {
//   url: audioMP3,
//   title: 'Impact Moderato',
//   artist: 'Kevin MacLeod',
//   duration: 132,
// };

// const track2: Track = {
//   url: 'http://example.com/avaritia.mp3',
//   title: 'Avaritia',
//   artist: 'deadmau5',
//   album: 'while(1<2)',
//   genre: 'Progressive House, Electro House',
//   date: '2014-05-20T07:00:00+00:00',
//   artwork: 'http://example.com/cover.png',
//   duration: 402,
// };

// async function setupQueue() {
//   await TrackPlayer.add([track1, track2]);
//   await TrackPlayer.setRepeatMode(RepeatMode.Queue);
// }

// function computeProgress(position: number) {
//   const hours = `${Math.floor(position / (24 * 60))}`.padStart(2, '0');
//   const minutes = `${Math.floor(position / 60)}`.padStart(2, '0');
//   const seconds = `${position % 60}`.padStart(2, '0');

//   return `${hours}:${minutes}:${seconds}`;
// }

export const TrackPlayerAudioScreen: React.FC = () => {
  // const [isPlayerReady, setIsPlayerReady] = React.useState(false);

  // const playbackState = usePlaybackState();
  // const progress = useProgress();
  // const track = useCurrentTrack();
  // const onTogglePlayback = useOnTogglePlayback();

  // const isPlaying = playbackState === State.Playing;
  // const isLoading =
  //   playbackState === State.Connecting || playbackState === State.Buffering;
  // const progressPosition = computeProgress(progress.position);
  // const progressLeft = computeProgress(progress.duration - progress.position);

  // const onPrev = React.useCallback(() => {
  //   TrackPlayer.skipToPrevious();
  // }, []);
  // const onNext = React.useCallback(() => {
  //   TrackPlayer.skipToPrevious();
  // }, []);
  // const onSlidingComplete = React.useCallback((position: number) => {
  //   TrackPlayer.seekTo(position);
  // }, []);

  // React.useEffect(() => {
  //   async function run() {
  //     const isSetup = await SetupService();

  //     setIsPlayerReady(isSetup);

  //     const queue = await TrackPlayer.getQueue();
  //     if (isSetup && queue.length <= 0) {
  //       await setupQueue();
  //     }
  //   }

  //   run();

  //   return () => {
  //     TrackPlayer.pause();
  //   };
  // }, []);

  return (
    <Page
      containerStyle={styles.container}
      scrollContentContainerStyle={styles.container}>
      <Text>
        Track Player has some weird errors and is not actively developed by
        maintainers
      </Text>
      {/* {!isPlayerReady ? (
        <ActivityIndicator color={COLORS.SUCCESS} size="large" />
      ) : (
        <>
          {track?.artwork ? (
            <Image
              source={{ uri: track.artwork as string }}
              style={styles.artwork}
            />
          ) : null}
          <View style={styles.controls}>
            <Pressable onPress={onPrev} style={styles.button}>
              <Text style={styles.buttonLabel}>Prev</Text>
            </Pressable>
            {isLoading ? (
              <ActivityIndicator color={COLORS.SUCCESS} size="small" />
            ) : (
              <Pressable onPress={onTogglePlayback} style={styles.button}>
                <Text style={styles.buttonLabel}>
                  {isPlaying ? 'Pause' : 'Play'}
                </Text>
              </Pressable>
            )}
            <Pressable onPress={onNext} style={styles.button}>
              <Text style={styles.buttonLabel}>Next</Text>
            </Pressable>
          </View>
          <Slider
            maximumTrackTintColor={COLORS.LIGHTER}
            maximumValue={progress.duration}
            minimumTrackTintColor={COLORS.LIGHT}
            minimumValue={0}
            onSlidingComplete={onSlidingComplete}
            style={styles.slider}
            thumbTintColor={COLORS.PRIMARY}
            value={progress.position}
          />
          <View style={styles.progressLabelContainer}>
            <Text style={styles.progressLabelText}>{progressPosition}</Text>
            <Text style={styles.progressLabelText}>{progressLeft}</Text>
          </View>
        </>
      )} */}
    </Page>
  );
};

const styles = StyleSheet.create({
  artwork: {
    backgroundColor: COLORS.DARKER,
    height: 250,
    marginTop: 40,
    width: 250,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
    padding: 25,
  },
  buttonLabel: {
    fontSize: 36,
    textTransform: 'uppercase',
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 50,
    marginVertical: 20,
  },
  progressLabelContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  progressLabelText: {
    color: COLORS.PRIMARY,
  },
  slider: {
    flexDirection: 'row',
    height: 50,
    marginTop: 30,
    width: 320,
  },
});
