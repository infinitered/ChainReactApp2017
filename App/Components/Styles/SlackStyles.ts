import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts  } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  heading: {
    marginTop: 14,
    fontFamily: Fonts.type.bold,
    fontSize: 31,
    letterSpacing: 0.2,
    backgroundColor: Colors.transparent,
    color: Colors.snow
  },
  slack: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 55,
    paddingBottom: 35
  },
  slackButton: {
    marginTop: 25
  }
})
