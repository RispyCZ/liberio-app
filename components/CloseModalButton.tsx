import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { router } from 'expo-router'

const CloseModalButton = () => {
  return (
    <TouchableOpacity>
      <Ionicons
        color={Colors.primary} name='close'
        size={32}
        onPress={() => router.push('/')} />
    </TouchableOpacity>
  )
}

export default CloseModalButton