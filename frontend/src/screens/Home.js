import React from 'react'
import { Image, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import Post from '../components/Post.js'
import { DirectMessageInactive } from '../components/icons/index'
import Story from '../components/Story.js'

function Home({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      {/* header */}
      <View style={styles.headerContainer}>
        <Image style={styles.headerImage} source={require('../assets/instagram-text-logo.png')} />
        <TouchableOpacity onPress={() => navigation.navigate('Message')}>
          <DirectMessageInactive />
        </TouchableOpacity>
      </View>
      {/* Story */}
      <SafeAreaView>
        <ScrollView horizontal={true} contentContainerStyle={styles.storyContainer}>
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </ScrollView>
      </SafeAreaView>
      <View></View>
      {/* content */}
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.postsContainer}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  headerContainer: {
    height: 60,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#ECECEC',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  headerImage: {
    width: 120,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  storyContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6'
  },
  postsContainer: {
    alignItems: 'center'
  }
})

export default Home
