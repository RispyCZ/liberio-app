import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

export default function MyBooks() {
  return (
    <SafeAreaView>
      <Text style={{ color: Colors.text }}>MyBooks</Text>
    </SafeAreaView>
  )
}