import React, { FC } from 'react'
import { Redirect, Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { SignedOut, SignedIn } from '@clerk/clerk-expo'
import { HouseLine, PlayCircle, BookOpenText, UserCircle } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native'
const TabsLayout: FC = () => {
  return (
    <SafeAreaView>
      <SignedOut>
        <Redirect href='/(stack)/(auth)/sign-in' />
      </SignedOut>
      <SignedIn>
        <Tabs screenOptions={{
          tabBarInactiveTintColor: Colors.text,
          tabBarActiveTintColor: Colors.primary,
        }}>
          <Tabs.Screen name='index' options={{
            tabBarIcon: ({ color, size }) => <HouseLine weight='bold' color={color} size={size} />,
            tabBarLabel: 'Domů',
            headerShown: false
          }} />
          <Tabs.Screen name='player' options={{
            tabBarIcon: ({ color, size }) => <PlayCircle weight='bold' color={color} size={size} />,
            tabBarLabel: 'Přehrávač',
            headerShown: false
          }} />
          <Tabs.Screen name='my-books' options={{
            tabBarIcon: ({ color, size }) => <BookOpenText weight='bold' color={color} size={size} />,
            tabBarLabel: 'Moje knihy',
            headerShown: false
          }} />
          <Tabs.Screen name='profile' options={{
            tabBarIcon: ({ color, size }) => <UserCircle weight='bold' color={color} size={size} />,
            tabBarLabel: 'Profil',
            headerShown: false
          }} />
        </Tabs>
      </SignedIn>
    </SafeAreaView>
  )
}

export default TabsLayout