import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

// Enable this if you have app-wide application styles
// import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  // Merge in the screen styles from application styles
  // ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    // For Android :/
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  mapCloseButton: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    margin: Metrics.smallMargin,
    position: 'absolute',
    left: 0,
    zIndex: 100
  }
})
