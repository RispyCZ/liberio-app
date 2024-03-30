import React, { FC, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from './Button';
import Colors from '@/constants/Colors';
import { useSignIn } from '@clerk/clerk-expo';
import { router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { ClerkErrorMessage } from '@/types/ClerkErrorMessage';
import Form from './Form';
import { globalStyles } from '@/constants/GlobalStyles';

type FormData = {
  emailAddress: string
  password: string
}

const SignInForm: FC = () => {
  const { isLoaded, setActive, signIn } = useSignIn()

  const { control, handleSubmit, setError, formState: { errors } } = useForm<FormData>()

  const onSubmit = handleSubmit(async (data) => {
    const { emailAddress, password } = data

    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      })
      await setActive({ session: completeSignIn.createdSessionId })
      router.push('/(modals)/oauth-native-callback')
    } catch (e) {
      const err = e as ClerkErrorMessage
      if (err.clerkError) {
        setError('emailAddress', { type: 'invalidCredentials' })
        setError('password', { type: 'invalidCredentials' })
      }
    }
  })

  return (
    <Form>
      {(
        errors.emailAddress
        ||
        errors.password) &&
        <Text style={{ color: Colors.danger, textAlign: 'center' }}>
          Email nebo heslo není validní
        </Text>
      }
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            autoCapitalize="none"
            placeholderTextColor='#abb2bf'
            style={[globalStyles.defaultInput, { borderColor: errors.emailAddress ? Colors.danger : 'gray' }]}
            placeholder="E-mail"
            keyboardType="email-address"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
        name='emailAddress'
      />

      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            autoCapitalize="none"
            placeholderTextColor='#abb2bf'
            style={[globalStyles.defaultInput, { borderColor: errors.password ? Colors.danger : 'gray' }]}
            placeholder="Heslo"
            secureTextEntry
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='password'
      />

      <Button variant='primary' onPress={onSubmit}>Příhlásit se</Button>
    </Form>
  )
}

export default SignInForm