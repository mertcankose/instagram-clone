import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

function NotifyBox({ notify = true, children, ...props }) {
  return (
    <TouchableOpacity style={styles.notifyBoxContainer} {...props}>
      {notify && <View style={styles.notify} />}
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  notifyBoxContainer: {
    position: 'relative'
  },
  notify: {
    position: 'absolute',
    backgroundColor: 'red',
    top: 18,
    right: 20,
    color: '#fff',
    height: 4,
    width: 4,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default NotifyBox
