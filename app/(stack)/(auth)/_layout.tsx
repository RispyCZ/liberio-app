import React, { FC } from 'react'
import { Slot } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '@/constants/Colors'
import { SafeAreaView, StyleSheet, View } from 'react-native'

const AuthLayout: FC = () => {
  return (
    <LinearGradient
      colors={[Colors.background, '#4e5658', Colors.background]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View style={styles.authContainer}>
          <Slot />
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  authContainer: {
    marginTop: '20%',
    padding: 40,
    justifyContent: 'center',
    alignContent: 'center',
  }
})

export default AuthLayout