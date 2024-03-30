import Book from '@/components/Book'
import { Player } from '@/components/Player'
import { getBookById } from '@/lib/Books'
import React, { FC } from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'

const PlayerPage: FC = () => {
  const book = getBookById('001')

  return (
    <SafeAreaView>
      <View style={styles.playerContainer}>
        <Book {...book} />
        <Player />
      </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  playerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20%',
  }
})


export default PlayerPage