import { StyleSheet, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import React, { FC } from 'react'
import Colors from '@/constants/Colors'

type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode,
  variant: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({ variant, children, ...props }) => {
  return (
    <TouchableOpacity
      style={
        variant == 'primary' ?
          StyleSheet.compose(styles.button, styles.primary)
          :
          StyleSheet.compose(styles.button, styles.secondary)
      } {...props}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.text,
    fontFamily: 'open-sans-eb'
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  primary: {
    backgroundColor: Colors.primary
  },
  secondary: {
    backgroundColor: Colors.secondary
  }
})

export default Button