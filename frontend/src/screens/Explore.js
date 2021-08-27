import React from 'react'
import { Text, View, Button } from 'react-native'
import SearchBox from '../components/SearchBox'

function Explore({ navigation }) {
  return (
    <View>
      <Text>ExploreView!</Text>
      <SearchBox />
      <Button title="Go to Search" onPress={() => navigation.navigate('Search')} />
      <Button title="Go to Post" onPress={() => navigation.navigate('ExplorePosts')} />
    </View>
  )
}

export default Explore
