import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { LikesInactive, CommentInactive, DirectMessageInactive, SaveInactive, Menu } from './icons'

function Post({ style, ...props }) {
  return (
    <View style={[styles.postContainer, style]} {...props}>
      <View style={styles.postHeader}>
        <View style={styles.postUser}>
          <Image />
          <Text>mertcankse_</Text>
        </View>
        <View style={styles.postMenu}>
          <Menu />
        </View>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://external-preview.redd.it/TAicbXC9YyxSlOLrzNsIVU1grws7KLpjwKAlWlSDih4.png?auto=webp&s=c93edb2154c20270698fb2efff0bfa560f82c15e'
        }}
      />
      <View style={styles.postInteractionContainer}>
        <View style={styles.postInteractionLeft}>
          <LikesInactive />
          <CommentInactive />
          <DirectMessageInactive />
        </View>
        <View style={styles.postInteractionRight}>
          <SaveInactive />
        </View>
      </View>
      <View style={styles.postDescription}></View>
      <View style={styles.showComments}></View>
      <View style={styles.postDate}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    height: 360,
    borderWidth: 2,
    borderColor: 'red'
  },
  image: {
    flex: 1
  }
})

export default Post
