import React from 'react'
import { StyleSheet, StatusBar, Platform, SafeAreaView, View, Text } from 'react-native'

function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>Hey</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    //backgroundColor: "#fff",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    //marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
})

export default App
