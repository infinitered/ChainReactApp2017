import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  liveHelp: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  liveHelpPhone: {
    color: Colors.snow,
    fontFamily: Fonts.type.bold,
    fontSize: 31,
    fontWeight: '900'
  },
  liveHelpText: {
    margin: 5,
    color: Colors.snow,
    opacity: 0.9,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: Fonts.type.base,
    lineHeight: 23,
    textAlign: 'center'
  },
  liveHelpButton: {
    marginTop: 25,
    width: 200
  },
  link: {
    textDecorationLine: 'underline'
  }
})
