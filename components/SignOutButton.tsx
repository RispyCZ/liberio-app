import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import Button from './Button'

const SignOutButton = () => {
  const { signOut } = useAuth()
  return (
    <Button variant='secondary' onPress={() => signOut()}>
      Odhlásit se
    </Button>
  )
}

export default SignOutButton