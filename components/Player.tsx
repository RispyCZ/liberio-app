import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import React, { FC, useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'
import { globalStyles } from '@/constants/GlobalStyles'
import { AVPlaybackStatus, Audio } from 'expo-av';
import { Duration } from 'luxon'
import { usePlayerStore } from '@/hooks/usePlayerStore'
import { Play, Stop } from 'phosphor-react-native'


export const Player: FC = () => {
  Audio.setAudioModeAsync({
    staysActiveInBackground: true,
    playsInSilentModeIOS: true
  });

  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const playerStore = usePlayerStore()
  const [currentDuration, setCurrentDuration] = useState<number>(0)
  const [totalDuration, setTotalDuration] = useState<number>(0)

  useEffect(() => {
    const loadAudio = async () => {
      const { sound } = await Audio.Sound.createAsync({
        uri: 'http://192.168.100.53:8080/matzet/output_playlist.m3u8',
      })
      sound.setOnPlaybackStatusUpdate(handlePlayerBackStatusUpdate)
      playerStore.setSound(sound)
    }
    loadAudio()
  }, [])

  const handlePlayerBackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded && status.isPlaying) {
      setCurrentDuration(status.positionMillis ?? 0)
      setTotalDuration(status.durationMillis ?? 0)
    }
  }

  const handleSliderUpdate = (value: number) => {
    setCurrentDuration(value)
    playerStore.sound?.playFromPositionAsync(value)
    setIsPlaying(true)
  }

  const play = () => {
    setIsPlaying(!isPlaying)
    if (isPlaying) return playerStore.sound?.pauseAsync()
    playerStore.sound?.playFromPositionAsync(currentDuration)
  }
  return (
    <View style={styles.container}>
      <Slider
        style={{ width: 200, height: 40 }}
        value={currentDuration}
        minimumValue={0}
        maximumValue={totalDuration}
        onSlidingStart={() => playerStore.sound?.pauseAsync()}
        onSlidingComplete={handleSliderUpdate}
        thumbTintColor={Colors.primary}
        minimumTrackTintColor={Colors.primary}
        maximumTrackTintColor={Colors.secondary}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Text style={globalStyles.baseText}>{Duration.fromMillis(currentDuration).toISOTime()}</Text>
        <Text style={globalStyles.baseText}>{Duration.fromMillis(totalDuration).toISOTime()}</Text>
      </View>
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => play()}
      >
        {isPlaying ?
          <Stop color={Colors.text} size={32} />
          :
          <Play color={Colors.text} size={32} />
        }
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create(({
  playButton: {
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 20,
  },
  container: {
    margin: 20,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
}))
