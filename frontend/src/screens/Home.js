import React from 'react'
import { Image, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import Post from '../components/Post.js'
import { DirectMessageInactive } from '../components/icons/index'
import Story from '../components/Story.js'

const images = [
  {
    admin: true,
    image: 'https://avatars.githubusercontent.com/u/56760896?v=4'
  },
  {
    admin: false,
    image: 'https://avatars.githubusercontent.com/u/1197375?v=4'
  },
  {
    image: 'https://avatars.githubusercontent.com/u/810438?v=4'
  },
  {
    admin: false,
    image: 'https://avatars.githubusercontent.com/u/56760896?v=4'
  },
  {
    admin: false,
    image: 'https://avatars.githubusercontent.com/u/1197375?v=4'
  },
  {
    admin: false,
    image: 'https://avatars.githubusercontent.com/u/810438?v=4'
  },
  {
    admin: false,
    image: 'https://avatars.githubusercontent.com/u/56760896?v=4'
  },
  {
    admin: false,
    image: 'https://avatars.githubusercontent.com/u/1197375?v=4'
  },
  {
    admin: false,
    image: 'https://avatars.githubusercontent.com/u/810438?v=4'
  },
  {
    admin: false,
    image: 'https://avatars.githubusercontent.com/u/56760896?v=4'
  },
  {
    admin: false,
    image: 'https://avatars.githubusercontent.com/u/1197375?v=4'
  },
  {
    admin: false,
    image: 'https://avatars.githubusercontent.com/u/810438?v=4'
  }
]

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
      <View style={styles.storiesContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.storiesScrollContainer}>
          {images.map((item, index) => (
            <Story key={index} children={item.image} style={styles.story} admin={item.admin} />
          ))}
        </ScrollView>
      </View>

      {/* content */}
      <View style={styles.postsContainer}>
        <ScrollView contentContainerStyle={styles.postsScrollContainer}>
          {images.map((item, index) => (
            <Post key={index} style={styles.post} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: 'white',
    flex: 1
  },

  //header
  headerContainer: {
    height: 60,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#ECECEC',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  headerImage: {
    width: 120,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  //story
  storiesContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#f6f6f6'
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 6
  },
  storiesScrollContainer: {
    alignItems: 'center',
    paddingStart: 6,
    paddingEnd: 6
  },
  story: {
    marginHorizontal: 8
  },

  //post
  postsContainer: {
    flex: 5
  },
  postsScrollContainer: {},
  post: {
    marginBottom: 20
  }
})

export default Home
