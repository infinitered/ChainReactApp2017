import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: Metrics.doubleBaseMargin,
    borderBottomLeftRadius: Metrics.cardRadius,
    borderBottomRightRadius: Metrics.cardRadius,
    backgroundColor: Colors.silver
  },
  details: {
    flex: 1,
    flexDirection: 'row'
  },
  detail: {
    paddingRight: Metrics.doubleBaseMargin
  },
  detailLabel: {
    fontFamily: 'Montserrat-Light',
    fontSize: 11,
    color: Colors.lightText,
    letterSpacing: 0
  },
  detailText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 11,
    color: Colors.darkPurple,
    letterSpacing: 0
  },
  remindMe: {
    flex: 1,
    alignItems: 'stretch'
  },
  socialButtons: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})
