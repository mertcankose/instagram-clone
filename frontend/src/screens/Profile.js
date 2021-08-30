import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import Post from '../components/Post.js'
import { DirectMessageInactive } from '../components/icons/index'
import { Unlock, Lock, ShareInactive, Menu } from '../components/icons/index'

function Profile({ navigation, isLock = true, username = 'mertcankse_' }) {
  return (
    <View style={styles.homeContainer}>
      {/* header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          {isLock ? <Lock /> : <Unlock />}
          <Text style={styles.name}>{username}</Text>
        </View>
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Share')}>
            <ShareInactive />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 16 }} onPress={() => navigation.navigate('EditProfile')}>
            <Menu />
          </TouchableOpacity>
        </View>
      </View>
      {/* Profile */}

      <View style={styles.profileInformationContainer}>
        <Text>Profile Information</Text>
      </View>

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
    paddingLeft: 12,
    paddingRight: 12
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  profileInformationContainer: {
    height: 200
  },
  postsContainer: {
    alignItems: 'center'
  }
})

export default Profile
