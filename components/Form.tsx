import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

type FormProps = {
  children: React.ReactNode
}

const Form: FC<FormProps> = ({ children }) => {
  return (
    <View style={styles.formContainer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 30,
    gap: 15,
  }
})

export default Form