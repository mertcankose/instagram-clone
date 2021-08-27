import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { SearchInactive } from './icons'
import { useNavigation } from '@react-navigation/native'
import { Close } from './icons'

function SearchBox() {
  const navigation = useNavigation()

  const [isFocus, setFocus] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const focusToInput = () => {
    //navigation.navigate('Search')
    setFocus(true)
  }

  const onClose = () => {
    setSearchValue('')
  }

  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputBox}>
        {!isFocus && (
          <TouchableOpacity style={styles.searchButton}>
            <SearchInactive style={styles.searchButtonIcon} />
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
            <Close style={styles.closeButtonIcon} />
          </TouchableOpacity>
        )}
      </View>
      {isFocus && (
        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
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
    height: 52,
    fontSize: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
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
    left: 16,
    top: 14,
    zIndex: 1
  },

  closeButton: {
    position: 'absolute',
    justifyContent: 'center',
    right: 16,
    top: 14
  },
  cancelButton: {
    height: 52,
    justifyContent: 'center',
    //borderWidth: 1,
    //borderColor: 'red',
    paddingLeft: 12,
    paddingRight: 12
  },
  cancelButtonText: {
    fontSize: 15
  }
})

export default SearchBox
