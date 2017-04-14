import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  mainHeading: {
    fontFamily: 'Avenir-Black',
    fontSize: 31,
    letterSpacing: 0.2,
    color: Colors.snow
  },
  address: {
    marginBottom: 36,
    fontFamily: 'Avenir-Medium',
    fontSize: 15,
    letterSpacing: 0.47,
    lineHeight: 23,
    textAlign: 'center',
    color: '#FDE5FF'
  }
})
