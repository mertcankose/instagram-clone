import React from 'react'
import { StyleSheet, StatusBar, Platform, SafeAreaView, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//screens
import Home from './screens/Home.js'
import Share from './screens/Share.js'
import Likes from './screens/Likes.js'
import Profile from './screens/Profile.js'
import Explore from './screens/Explore.js'
import ExplorePosts from './screens/ExplorePosts.js'
import Message from './screens/Message.js'
import MenuProfile from './screens/MenuProfile.js'
import EditProfile from './screens/EditProfile.js'
//components
import TabBar from './components/TabBar.js'
//import Ionicons from "react-native-vector-icons/Ionicons"; //kullanışlı bir kütüphane bunu daha sonra kullanabilirim

//hooks
const Tab = createBottomTabNavigator()
const SearchStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()
const ProfileStack = createNativeStackNavigator()

//stacks
function ExplorePageStack() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
      <SearchStack.Screen name="ExplorePosts" component={ExplorePosts} options={{ title: 'Explore', headerTitleAlign: 'center' }} />
    </SearchStack.Navigator>
  )
}
function HomePageStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <HomeStack.Screen name="Message" component={Message} options={{ title: 'Messages', headerTitleAlign: 'center' }} />
    </HomeStack.Navigator>
  )
}
function ProfilePageStack() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <ProfileStack.Screen name="MenuProfile" component={MenuProfile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="Share" component={Share} options={{ headerShown: false }} />
    </ProfileStack.Navigator>
  )
}

function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#6a51ae" barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Tab.Screen name="HomeStack" component={HomePageStack} />
          <Tab.Screen name="ExploreStack" component={ExplorePageStack} />
          <Tab.Screen name="Share" component={Share} options={{ headerShown: false }} />
          <Tab.Screen name="Likes" component={Likes} />
          <Tab.Screen name="ProfileStack" component={ProfilePageStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
    //backgroundColor: 'white'
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    //marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})

export default App
