import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { FC } from 'react'

const ForgotPassword: FC = () => {
  return (
    <SafeAreaView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    textAlign: 'center'
  },
  linksContainer: {
    marginTop: 40,
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  authContainer: {
    marginTop: '20%',
    padding: 40,
    justifyContent: 'center',
    alignContent: 'center',
  }
})

export default ForgotPassword