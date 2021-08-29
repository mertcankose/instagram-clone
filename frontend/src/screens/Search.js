import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBox from '../components/SearchBox'
import DismissKeyboard from '../components/DismissKeyboard'

function Search() {
  return (
    <DismissKeyboard>
      <View style={styles.screen}>
        <Text>Search Page</Text>
      </View>
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ccc'
  }
})

export default Search
