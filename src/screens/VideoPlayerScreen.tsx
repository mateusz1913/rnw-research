import { useRoute } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import * as React from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Video, { OnLoadData, OnProgressData } from 'react-native-video';

import { videoMP4 } from '../../assets';

import { VideoPlayerRouteProp } from '../navigation/types';
import { COLORS } from '../constants/colors';

export const VideoPlayerScreen: React.FC = () => {
  const route = useRoute<VideoPlayerRouteProp>();
  const hasBuiltInControls = route.params.hasBuiltInControls;

  const videoRef = React.useRef<Video>(null);

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const onLoad = React.useCallback((data: NativeSyntheticEvent<OnLoadData>) => {
    console.log(data.nativeEvent.duration);
    setDuration(data.nativeEvent.duration);
  }, []);
  const onProgress = React.useCallback(
    (data: NativeSyntheticEvent<OnProgressData>) => {
      setCurrentTime(data.nativeEvent.currentTime);
    },
    [],
  );

  // When changing from fullscreen to not fullscreen
  // builtin controls are still displayed
  //
  // This can be patched inside ReactVideoView.cpp (ReactVideoView::Set_FullScreen)
  const toggleFullScreen = React.useCallback(
    () => setIsFullscreen(prev => !prev),
    [],
  );
  const togglePlay = React.useCallback(() => setIsPlaying(prev => !prev), []);

  return (
    <Pressable
      disabled={hasBuiltInControls}
      onPress={togglePlay}
      style={StyleSheet.absoluteFill}>
      <Video
        ref={videoRef}
        controls={hasBuiltInControls}
        fullscreen={isFullscreen}
        // Types are incorrect (should be NativeSyntheticEvent at least for Windows)
        onLoad={onLoad as any}
        onError={error => {
          console.log({ error });
        }}
        // Types are incorrect (should be NativeSyntheticEvent at least for Windows)
        onProgress={onProgress as any}
        paused={!isPlaying}
        resizeMode="contain"
        source={videoMP4}
        style={StyleSheet.absoluteFill}
      />
      {!hasBuiltInControls ? (
        <View style={styles.controls}>
          <Slider
            maximumValue={duration}
            maximumTrackTintColor={COLORS.DARKER}
            minimumValue={0}
            minimumTrackTintColor={COLORS.DARK}
            onSlidingComplete={newValue => {
              videoRef.current?.seek(newValue);
            }}
            step={1}
            style={styles.slider}
            thumbTintColor={COLORS.SECONDARY}
            value={currentTime}
          />
          <Pressable onPress={toggleFullScreen}>
            <Text>
              {!isFullscreen ? 'Open fullscreen' : 'Close fullscreen'}
            </Text>
          </Pressable>
        </View>
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  controls: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  slider: {
    alignSelf: 'stretch',
    backgroundColor: COLORS.TERTIARY,
    height: 40,
    marginHorizontal: 20,
    width: 300,
  },
});
