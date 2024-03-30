import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import React, { FC } from 'react'
import Button from '@/components/Button'
import { globalStyles } from '@/constants/GlobalStyles'

const SignUp: FC = () => {
  return (
    <View style={styles.singUpIndexContainer}>
      <Button variant='secondary' onPress={() => router.push('/sign-up/first-and-last-name')}>Vytvořit účet</Button>
      <TouchableOpacity onPress={() => router.push('/sign-in')}>
        <Text style={globalStyles.baseText}>Už máte účet?</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  singUpIndexContainer: {
    marginTop: 40,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SignUp