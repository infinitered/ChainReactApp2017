import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: -18
  },
  time: {
    fontFamily: 'AvenirNextCondensed-Heavy',
    fontSize: 8,
    color: Colors.snow,
    letterSpacing: -0.22,
    backgroundColor: Colors.transparent
  },
  icon: {}
})
