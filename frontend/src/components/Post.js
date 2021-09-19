import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { LikesInactive, CommentInactive, DirectMessageInactive, SaveInactive, Menu } from './icons'

function Post({ style, post, ...props }) {
  return (
    <View style={[styles.postContainer, style]} {...props}>
      <View style={styles.postHeader}>
        <View style={styles.postUser}>
          <Image style={styles.postUserImage} source={{ uri: post.user.photo }} />
          <Text style={styles.postUserName}>{post.user.username}</Text>
        </View>
        <View style={styles.postMenu}>
          <Menu />
        </View>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: post.photo
        }}
      />
      <View style={styles.postInteractionContainer}>
        <View style={styles.postInteractionLeft}>
          <LikesInactive />
          <CommentInactive style={{ marginLeft: 12, marginRight: 12 }} />
          <DirectMessageInactive />
        </View>
        <View style={styles.postInteractionRight}>
          <SaveInactive />
        </View>
      </View>
      <View style={styles.postExtraInfoContainer}>
        <Text style={styles.postLikes}>{post.likes.length} likes</Text>
        <Text style={styles.postDescription}>{post.description}</Text>
        <Text style={styles.postComments}>2 comment...</Text>
        <Text style={styles.postDate}>Sept 8</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    height: 460,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    paddingBottom: 4
  },

  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 6,
    paddingRight: 6,
    marginVertical: 8
  },

  postUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  postUserName: {
    marginLeft: 8,
    fontWeight: 'bold'
  },

  postUserImage: {
    width: 32,
    height: 32,
    borderRadius: 999
  },

  postMenu: {},

  image: {
    flex: 1
  },
  //
  postInteractionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    paddingLeft: 10,
    paddingRight: 10
  },
  postInteractionLeft: {
    flexDirection: 'row'
  },
  postInteractionRight: {},
  postExtraInfoContainer: {
    marginVertical: 8,
    paddingLeft: 10,
    paddingRight: 10
  },

  postLikes: {
    fontWeight: 'bold'
  },
  postDescription: {
    marginTop: 4,
    marginBottom: 4
  },
  postComments: {
    color: 'gray',
    marginBottom: 4
  },
  postDate: {
    color: 'gray'
  }
})

export default Post
