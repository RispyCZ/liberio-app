import React, { FC } from 'react'
import SignInForm from '@/components/SignInForm'
import { globalStyles } from '@/constants/GlobalStyles'
import { Text, StyleSheet, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { router } from 'expo-router'
import Button from '@/components/Button'
const SignIn: FC = () => {
  return (
    <>
      <Text style={[globalStyles.h2, styles.title]}>Přihlášte se prosím</Text>
      <SignInForm />
      <View style={styles.linksContainer}>
        <Button variant='secondary' onPress={() => router.push('/sign-up/')}>Vytvořit účet</Button>
        <TouchableOpacity onPress={() => router.push('/forgot-password')}>
          <Text style={globalStyles.baseText}>Zapomenuté heslo</Text>
        </TouchableOpacity>
      </View>
    </>
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

export default SignIn