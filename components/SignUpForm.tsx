import React, { FC, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from './Button';
import Colors from '@/constants/Colors';
import { useSignUp } from '@clerk/clerk-expo';
import { router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { ClerkErrorMessage } from '@/types/ClerkErrorMessage';

type FormData = {
  firstName: string
  lastName: string
  emailAddress: string
  password: string
}

const SignUpForm: FC = () => {
  const { isLoaded, setActive, signUp } = useSignUp()
  const { control, handleSubmit, setError, formState: { errors } } = useForm<FormData>()

  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')

  const onSubmit = handleSubmit(async (data) => {
    const { emailAddress, password, firstName, lastName } = data
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      })

      //await signUp.prepareEmailAddressVerification({ strategy: "email_link", redirectUrl: "http://localhost:3000" })

    } catch (e: any) {
      const err = e as ClerkErrorMessage
      console.log(err.errors)
      if (err.clerkError) {
        setError('firstName', { type: 'invalidCredentials' })
        setError('lastName', { type: 'invalidCredentials' })
        setError('emailAddress', { type: 'invalidCredentials' })
        setError('password', { type: 'invalidCredentials' })
      }
    }
  })


  const handleVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
      router.push('/(modals)/oauth-native-callback')
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  }

  if (pendingVerification) {
    return (
      <View style={styles.formContainer}>
        <TextInput
          autoCapitalize="none"
          placeholderTextColor='#abb2bf'
          style={
            [styles.input, { borderColor: errors.emailAddress ? '#C7372F' : 'gray' }]
          }
          placeholder="Kód"
          value={code}
          onChangeText={text => setCode(text)}
        />
        <Button variant='primary' onPress={() => handleVerify()}>
          Potvrdit E-Mail
        </Button>
      </View>
    )
  }

  return (
    <View style={styles.formContainer}>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            autoCapitalize="none"
            placeholderTextColor='#abb2bf'
            style={
              [styles.input, { borderColor: errors.firstName ? Colors.danger : 'gray' }]
            }
            placeholder="Jméno"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='firstName'
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
            style={
              [styles.input, { borderColor: errors.lastName ? Colors.danger : 'gray' }]
            }
            placeholder="Příjmení"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='lastName'
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
            style={
              [styles.input, { borderColor: errors.emailAddress ? Colors.danger : 'gray' }]
            }
            placeholder="E-mail"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
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
            style={
              [styles.input, { borderColor: errors.password ? Colors.danger : 'gray' }]
            }
            placeholder="Heslo"
            secureTextEntry
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name='password'
      />

      <Button variant='primary' onPress={() => onSubmit()}>Vytvořit účet</Button>
    </View >
  )
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 30,
    gap: 15,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: Colors.text,
    fontSize: 16,
  },
});

export default SignUpForm;