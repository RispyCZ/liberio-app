import { View, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import { globalStyles } from '@/constants/GlobalStyles'
import { Controller, useForm } from 'react-hook-form'
import Form from '@/components/Form'
import Colors from '@/constants/Colors'
import Button from '@/components/Button'
import { useSignInStore } from '@/hooks/useSignInStore'
import { router } from 'expo-router'

type FormData = {
  firstName: string
  lastName: string
}

const FistAndLastName: FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()
  const { setfirstName, setLastName } = useSignInStore()
  const onSubmit = handleSubmit((data) => {
    const { firstName, lastName } = data
    setfirstName(firstName)
    setLastName(lastName)
    router.push('/sign-up/email')
  })
  return (
    <>
      <Text style={[globalStyles.h4, globalStyles.textCenter]}>
        Nejdřív nám řekněte s kým máme tu čest!
      </Text>
      <Form>
        {(
          errors.firstName
          ||
          errors.lastName) &&
          <Text style={[globalStyles.dangerText, globalStyles.textCenter]}>
            Zadené údaje nejsou validní
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
              style={
                [globalStyles.defaultInput, { borderColor: errors.firstName ? Colors.danger : 'gray' }]
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
                [globalStyles.defaultInput, { borderColor: errors.lastName ? Colors.danger : 'gray' }]
              }
              placeholder="Příjmení"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name='lastName'
        />

        <Button variant='secondary' onPress={() => onSubmit()}>Pokračovat</Button>
      </Form>
    </>
  )
}

export default FistAndLastName