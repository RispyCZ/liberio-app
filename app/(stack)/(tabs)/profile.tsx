import Row from '@/components/Row'
import SignOutButton from '@/components/SignOutButton'
import { globalStyles } from '@/constants/GlobalStyles'
import { useUser } from '@clerk/clerk-expo'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'

const Profile = () => {
  const { user } = useUser()
  return (
    <SafeAreaView>
      <View style={styles.profileContainer}>
        <Text style={globalStyles.h2}>Tvůj profil</Text>
        <View style={styles.row}>
          <Image
            src={user?.imageUrl}
            style={{
              width: 64,
              height: 64,
              borderRadius: 20
            }} />
          <Text style={globalStyles.h3}>Petr Václavek</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={globalStyles.h3}>Tvůj email: {user?.primaryEmailAddress?.emailAddress}</Text>
          <Text style={globalStyles.h3}>Předplatné do: 1.5.2024</Text>
          <SignOutButton />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 10
  },
  infoContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  row: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray'
  }
})

export default Profile