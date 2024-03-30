import { View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { globalStyles } from '@/constants/GlobalStyles'
import { MagnifyingGlass } from 'phosphor-react-native'
import books from '../../../books.json'
import Book from '@/components/Book'
import Colors from '@/constants/Colors'


const HomePage: FC = () => {
  const { getToken } = useAuth()
  React.useEffect(() => {
    const fetchToken = async () => {
      console.log(await getToken({ template: 'Laravel' }))
    }
    fetchToken()
  }, [])

  return (
    <>
      <View style={{ margin: 20 }}>
        <Text style={globalStyles.h1}>Objevuj naší nabídku!</Text>
      </View>
      <View style={styles.topBarContainer}>
        <TextInput
          style={styles.input}
          placeholder='Hledej'
          autoCapitalize="none"
          placeholderTextColor='#abb2bf'
        />
        <TouchableOpacity style={styles.searchButton}>
          <MagnifyingGlass color={Colors.text} size={24} />
          <Text style={globalStyles.h3}>Hledej</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.homePageContainer}>
        <BookList />
      </View>
    </>
  )
}

const BookList: FC = () => {
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, marginTop: 5 }}>
        {books && books.map((book, index) => {
          return <Book key={index} {...book} />
        })}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  topBarContainer: {
    paddingVertical: 20,
    paddingHorizontal: 35,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchButton: {
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  homePageContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: Colors.text,
    fontSize: 16,
    borderBottomColor: 'gray'
  }
})

export default HomePage