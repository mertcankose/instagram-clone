import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import Post from '../components/Post.js'
import { DirectMessageInactive, Plus } from '../components/icons/index'
import { Unlock, Lock, ShareInactive, Menu } from '../components/icons/index'
import Story from '../components/Story.js'

const posts = [
  {
    user: {
      username: 'mertcankse_',
      photo: 'https://avatars.githubusercontent.com/u/56760896?v=4'
    },
    photo: 'https://avatars.githubusercontent.com/u/56760896?v=4',
    description: 'Lorem Ipsum Doler Sit Amet',
    likes: [
      { username: 'sdadasd', name: 'sadasd' },
      { username: 'adasd', name: 'asdasd' }
    ]
  },
  {
    user: {
      username: 'linuxtechtips',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7r5KQ7FfVUcYwHp2gH7_s7i_c37K2fIhNCg&usqp=CAU'
    },
    photo: 'https://external-preview.redd.it/TAicbXC9YyxSlOLrzNsIVU1grws7KLpjwKAlWlSDih4.png?auto=webp&s=c93edb2154c20270698fb2efff0bfa560f82c15e',
    description: 'Amet Sit Doler Isum Lorem',
    likes: [
      { username: 'sdadasd', name: 'sadasd' },
      { username: 'adasd', name: 'asdasd' }
    ]
  }
]

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
        <View style={styles.profileHead}>
          <Image style={styles.profileImage} source={{ uri: 'https://avatars.githubusercontent.com/u/56760896?v=4' }} />
          <View style={styles.profileCountersContainer}>
            <View style={[styles.counterContainer, styles.postCounterContainer]}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>2</Text>
              <Text style={{ fontSize: 16 }}>Posts</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Followers')}>
              <View style={[styles.counterContainer, styles.followersCounterContainer]}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>210</Text>
                <Text style={{ fontSize: 16 }}>Followers</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Following')}>
              <View style={[styles.counterContainer, styles.followingCounterContainer]}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>267</Text>
                <Text style={{ fontSize: 16 }}>Following</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileBio}>
          <Text style={{ fontWeight: 'bold', marginBottom: 1, fontSize: 18 }}>Mertcan Köse</Text>
          <Text>mertcankose.vercel.app/</Text>
        </View>
        <View style={styles.editProfileContainer}>
          <TouchableHighlight style={{ flex: 0.9 }} onPress={() => navigation.navigate('EditProfile')}>
            <View style={styles.editProfileButton}>
              <Text style={{ fontWeight: 'bold', letterSpacing: 1 }}>Edit Profile</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{ flex: 0.1, marginLeft: 4 }} onPress={() => navigation.navigate('EditProfile')}>
            <View style={styles.suggestedPeopleButton}>
              <Plus />
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.profileStoryHighlights}>
          <View style={{ flex: 0.9 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Story Highlights</Text>
            <Text>Keep your favorite stories on your profile</Text>
          </View>
          <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
            <Plus />
          </View>
        </View>
      </View>

      <View></View>
      {/* content */}
      {/*
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.postsContainer}>
          {posts.map((post, index) => (
            <Post key={index} style={styles.post} post={post} />
          ))}
        </ScrollView>
      </SafeAreaView>
      */}
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

  //
  profileInformationContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  profileHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 999
  },
  profileCountersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  counterContainer: {
    alignItems: 'center'
  },
  followersCounterContainer: {
    marginHorizontal: 20
  },
  profileBio: {
    marginVertical: 10
  },
  editProfileContainer: {
    flexDirection: 'row',
    marginVertical: 10
  },
  editProfileButton: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center'
  },
  suggestedPeopleButton: {
    backgroundColor: '#eee',
    padding: 6,
    borderRadius: 6,
    alignItems: 'center'
  },
  profileStoryHighlights: {
    flexDirection: 'row'
  },

  //
  postsContainer: {
    flex: 1,
    alignItems: 'center'
  },
  post: {}
})

export default Profile
