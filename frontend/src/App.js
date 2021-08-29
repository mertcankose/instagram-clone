import React, { useState, useEffect } from 'react'
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
import Search from './screens/Search.js'
import ExplorePosts from './screens/ExplorePosts.js'
//components
import TabBar from './components/TabBar.js'
import SearchBox from './components/SearchBox.js'

//import Ionicons from "react-native-vector-icons/Ionicons"; //kullanışlı bir kütüphane bunu daha sonra kullanabilirim

//hooks
const Tab = createBottomTabNavigator()
const SearchStack = createNativeStackNavigator()

//stacks
function ExploreStack({ navigation }) {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
      <SearchStack.Screen name="ExplorePosts" component={ExplorePosts} options={{ title: 'Explore', headerTitleAlign: 'center' }} />
    </SearchStack.Navigator>
  )
}

/*screenOptions={{ headerShown: false }} */
/*
options={{
  headerTitle: (props) => <SearchBox active={false} {...props} />
}}
*/
function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#6a51ae" barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />} initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="ExploreStack" component={ExploreStack} />
          <Tab.Screen name="Share" component={Share} />
          <Tab.Screen name="Likes" component={Likes} />
          <Tab.Screen name="Profile" component={Profile} />
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
