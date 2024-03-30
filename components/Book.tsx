import Colors from '@/constants/Colors'
import { globalStyles } from '@/constants/GlobalStyles'
import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { PlayCircle } from 'phosphor-react-native'

type BookProps = {
  title: string
  author: string
  imageLink: string
}

const Book: FC<BookProps> = ({ author, imageLink, title }) => {
  return (
    <View style={styles.bookContainer}>
      <Image source={{ uri: imageLink }} style={styles.bookImage} />
      <View style={styles.bottomTextContainer}>
        <View>
          <Text style={globalStyles.h2}>{title}</Text>
          <Text style={globalStyles.smText}>{author}</Text>
        </View>
        <TouchableOpacity>
          <PlayCircle weight='duotone' color={Colors.text} size={48} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bookImage: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  bookContainer: {
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    height: 500,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgba(1, 1, 1, .5)'
  }
})

export default Book