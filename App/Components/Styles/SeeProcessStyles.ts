import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  processContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'center',
    height: 60
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  starsIcon: {
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    backgroundColor: Colors.transparent,
    color: Colors.snow,
    fontFamily: Fonts.type.bold,
    fontSize: 13,
    letterSpacing: 0.2
  },
  rightArrow: {
    marginRight: 10
  }
})
