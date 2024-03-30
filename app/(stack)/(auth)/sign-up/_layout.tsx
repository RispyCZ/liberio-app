import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { globalStyles } from '@/constants/GlobalStyles'
import { Slot } from 'expo-router'

const SignUpLayout: FC = () => {
  return (
    <>
      <Text style={[globalStyles.h2, globalStyles.textCenter]}>Registrace</Text>
      <Slot />
    </>
  )
}



export default SignUpLayout