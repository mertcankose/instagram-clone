import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { SearchInactive } from './icons'
import { Close, ArrowLeft } from './icons'
import * as Animatable from 'react-native-animatable'

function SearchBox({ onChangeIsInside, ...props }) {
  const [isFocus, setFocus] = useState(false)
  const [isInside, setIsInside] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const focusToInput = () => {
    setFocus(true)
    setIsInside(true)
    onChangeIsInside(true)
  }

  const onClose = () => {
    setSearchValue('')
  }

  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }

  const changeContent = () => {
    setFocus(false)
    Keyboard.dismiss()
    setIsInside(false)
    onChangeIsInside(false)
  }

  return (
    <View style={styles.searchContainer} {...props}>
      {isInside && (
        <TouchableOpacity onPress={changeContent} style={styles.arrowLeftButton}>
          <Animatable.View animation="fadeInLeft" duration={220} easing="linear">
            <ArrowLeft style={styles.arrowLeftButtonIcon} />
          </Animatable.View>
        </TouchableOpacity>
      )}
      <View style={styles.searchInputBox}>
        {!isFocus && (
          <TouchableOpacity style={styles.searchButton}>
            <SearchInactive style={styles.searchButtonIcon} width={22} height={22} />
          </TouchableOpacity>
        )}
        <TextInput
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
          onFocus={focusToInput}
          style={[styles.searchInput, isFocus && styles.focusSearchInput]}
          placeholder="Search"
          placeholderTextColor="#716F81"
          underlineColorAndroid="transparent"
        />

        {searchValue.length > 0 && (
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Close style={styles.closeButtonIcon} width={22} height={22} />
          </TouchableOpacity>
        )}
      </View>
      {isFocus && (
        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <Animatable.Text animation="fadeInRight" duration={220} easing="linear" style={styles.cancelButtonText}>
            Cancel
          </Animatable.Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  //container
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  //input box
  searchInputBox: {
    flex: 1,
    position: 'relative'
  },

  //input
  searchInput: {
    height: 44,
    fontSize: 18,
    backgroundColor: '#F3F1F5',
    borderWidth: 1,
    borderColor: 'transparent',
    //borderColor: '#DDDDDD',
    borderRadius: 14,
    paddingLeft: 52,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },

  focusSearchInput: {
    paddingLeft: 12,
    borderColor: '#3DB2FF'
  },

  //icons
  searchButton: {
    position: 'absolute',
    left: 14,
    top: 10,
    zIndex: 1
  },

  closeButton: {
    position: 'absolute',
    justifyContent: 'center',
    right: 12,
    top: 10
  },

  cancelButton: {
    height: 44,
    justifyContent: 'center',
    //borderWidth: 1,
    //borderColor: 'red',
    paddingLeft: 12,
    paddingRight: 12
  },

  cancelButtonText: {
    fontSize: 15
  },

  //arrow left
  arrowLeftButton: {
    marginRight: 9
  }
})

export default SearchBox

//KEYBOARD LISTEN
/*
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow', keyboardDidShow)
      Keyboard.removeAllListeners('keyboardDidHide', keyboardDidHide)
    }
  })

  const keyboardDidShow = () => {
    console.log('keyboard is showing')
    onChangeFocus(true)
  }

  const keyboardDidHide = () => {
    console.log('keyboard is hiding')
    onChangeFocus(false)
  }
  */
