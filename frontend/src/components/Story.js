import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Plus } from './icons'

function Story({ admin, isLook = false, style, children = 'https://avatars.githubusercontent.com/u/56760896?v=4', ...props }) {
  return (
    <>
      {!admin ? (
        <LinearGradient
          colors={!isLook ? ['#C13584', '#E1306C', '#FCAF45', '#FFDC80'] : ['#CCCCCC', '#CCCCCC']}
          style={[styles.storyContainer, style]}
          {...props}
        >
          <Image style={styles.image} source={{ uri: children }} />
        </LinearGradient>
      ) : (
        <>
          <View style={[styles.storyContainer, style]} {...props}>
            <Image style={styles.image} source={{ uri: children }} />
            <View style={styles.plusContainer}>
              <Plus stroke="white" width={18} height={18} />
            </View>
          </View>
        </>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  storyContainer: {
    borderRadius: 999,
    width: 70,
    height: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 999
  },
  plusContainer: {
    position: 'absolute',
    backgroundColor: 'skyblue',
    borderRadius: 999,
    bottom: 2,
    right: 3,
    padding: 2,
    borderWidth: 2,
    borderColor: 'white'
  }
})

export default Story
