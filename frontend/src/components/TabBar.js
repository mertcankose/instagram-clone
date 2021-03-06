import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
//components
import ProfileTab from './ProfileTab.js'
import NotifyBox from './NotifyBox.js'
//icons
import { HomeActive, HomeInactive, SearchActive, SearchInactive, ShareActive, ShareInactive, LikesActive, LikesInactive } from './icons'

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        const notifyControl = (label) => {
          return (label === 'HomeStack' || label === 'Likes') && !isFocused
          /*
            if(notify ....) backende istek at ve notify varsa true döndür
          */
        }

        return label === 'Share' ? (
          <View key={label} style={styles.shareContainer}>
            <TouchableOpacity onPress={onPress} style={styles.shareButton}>
              {isFocused ? <ShareActive stroke="white" /> : <ShareInactive stroke="white" />}
            </TouchableOpacity>
          </View>
        ) : (
          <NotifyBox key={label} onPress={onPress} style={styles.tabButton} notify={notifyControl(label)}>
            {label === 'HomeStack' && (isFocused ? <HomeActive /> : <HomeInactive />)}
            {label === 'ExploreStack' && (isFocused ? <SearchActive /> : <SearchInactive />)}
            {label === 'Likes' && (isFocused ? <LikesActive fill="red" stroke="red" /> : <LikesInactive />)}
            {label === 'ProfileStack' && (isFocused ? <ProfileTab active={true} /> : <ProfileTab />)}
          </NotifyBox>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 68,
    borderTopWidth: 1,
    borderColor: '#F3F1F5',
    backgroundColor: 'white'
  },
  tabButton: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  shareContainer: {
    padding: 18,
    marginTop: -18,
    borderRadius: 999,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#EEEEEE'
  },
  shareButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 999,
    color: '#fff',
    width: 48,
    height: 48,
    padding: 18
  }
})

export default TabBar
