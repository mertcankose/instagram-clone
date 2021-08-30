import React, { useState } from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native'
import SearchBox from '../components/SearchBox'
import SearchResults from '../components/SearchResults.js'
import Post from '../components/Post'

function Explore({ navigation }) {
  const [isInside, setIsInside] = useState(false)

  return (
    <View style={styles.exploreContainer}>
      <View style={styles.searchBoxContainer}>
        <SearchBox onChangeIsInside={(status) => setIsInside(status)} />
      </View>

      <View style={styles.contentContainer}>
        {isInside ? (
          <SearchResults />
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate('ExplorePosts')}>
            <Post />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  exploreContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  searchBoxContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 10
  },
  contentContainer: {
    padding: 10
  }
})

export default Explore
