import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

function ProfileTab({ active = false }) {
  return (
    <View style={active && styles.activeProfileContainer}>
      <Image
        style={styles.profileImage}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/56760896?v=4'
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  activeProfileContainer: {
    padding: 1.5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 999
  },

  profileImage: {
    width: 26,
    height: 26,
    borderRadius: 999
  }
})

export default ProfileTab
