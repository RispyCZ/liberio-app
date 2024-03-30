import { View, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import Form from '@/components/Form'
import { globalStyles } from '@/constants/GlobalStyles'
import { Controller, useForm } from 'react-hook-form'
import Colors from '@/constants/Colors'
import Button from '@/components/Button'
import { useSignInStore } from '@/hooks/useSignInStore'
import { router } from 'expo-router'

type FormData = {
  emailAddress: string
}

const Email: FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()
  const { setEmailAddress } = useSignInStore()
  const onSubmit = handleSubmit((data) => {
    const { emailAddress } = data
    setEmailAddress(emailAddress)
    router.push('/sign-up/password')
  })
  return (
    <>
      <Text style={[globalStyles.h4, globalStyles.textCenter]}>
        Nechte nám na sebe kontakt, my se vám ozveme.
      </Text>
      <Form>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm)
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              placeholderTextColor='#abb2bf'
              style={
                [globalStyles.defaultInput, { borderColor: errors.emailAddress ? Colors.danger : 'gray' }]
              }
              placeholder="E-mail"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name='emailAddress'
        />

        <Button variant='secondary' onPress={() => onSubmit()}>Pokračovat</Button>
      </Form>
    </>
  )
}

export default Email