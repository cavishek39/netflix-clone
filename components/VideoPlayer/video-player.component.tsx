import React, {useEffect, useRef, useState} from 'react'
import {Button, View, StyleSheet} from 'react-native'
import {Video} from 'expo-av'
import {VideoPlayerComponentProps} from './video-player.component.props'
import {Playback} from 'expo-av/build/AV'

export const VideoPlayerComponent: React.FunctionComponent<VideoPlayerComponentProps> =
  (props: VideoPlayerComponentProps) => {
    const {video} = props

    const video_ref = useRef<Playback>(null)
    const [status, setStatus] = useState({})

    useEffect(() => {
      if (!video_ref) {
        return
      }
      ;(async () => {
        const unloadVideo = await video_ref?.current?.unloadAsync()
        const loadVideo = await video_ref?.current?.loadAsync(
          {uri: video?.video},
          {},
          false,
        )
      })()
    }, [video])

    return (
      <>
        <Video
          ref={video_ref as any}
          style={styles.video}
          source={{
            uri: video.video,
          }}
          posterSource={{uri: video.poster}}
          posterStyle={{
            resizeMode: 'cover',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          usePoster={true}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        {/* <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View> */}
      </>
    )
  }
const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
