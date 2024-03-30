import React, { FC } from 'react'
import { router } from 'expo-router'
import { useUser } from '@clerk/clerk-expo'
import { globalStyles } from '@/constants/GlobalStyles'
import { View, Image, Text, StyleSheet } from 'react-native'
import Button from '@/components/Button'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '@/constants/Colors'

const OAuthNativeCallback: FC = () => {
  const { user } = useUser()
  return (
    <LinearGradient
      colors={[Colors.background, '#4e5658', Colors.background]}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image
          src={user?.imageUrl}
          style={{
            width: 128,
            height: 128,
            borderRadius: 20,
          }}
        />
        <Text style={globalStyles.h2}>
          Vítej {user?.fullName}
        </Text>
        <Button
          onPress={() => router.replace('/')}
          variant='secondary'
        >
          Nabídka knih
        </Button>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create(({
  container: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    gap: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default OAuthNativeCallback