import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    padding: Metrics.doubleBaseMargin,
    borderTopLeftRadius: Metrics.cardRadius,
    borderTopRightRadius: Metrics.cardRadius,
    backgroundColor: 'white'
  },
  title: {
    fontFamily: 'Avenir-Black',
    fontSize: 17,
    color: Colors.darkPurple,
    letterSpacing: 0
  },
  name: {
    fontFamily: 'Avenir-Light',
    fontSize: 13,
    color: Colors.lightText,
    letterSpacing: 0
  },
  avatar: {
    width: Metrics.images.avatar,
    height: Metrics.images.avatar,
    borderColor: Colors.avatarBorder,
    borderWidth: 1,
    borderRadius: Metrics.images.avatar / 2
  },
  details: {
    flexDirection: 'row',
    padding: Metrics.doubleBaseMargin,
    borderBottomLeftRadius: Metrics.cardRadius,
    borderBottomRightRadius: Metrics.cardRadius,
    backgroundColor: Colors.silver
  },
  detail: {
    paddingRight: Metrics.baseMargin
  },
  detailLabel: {
    fontFamily: 'Avenir-Light',
    fontSize: 11,
    color: Colors.lightText,
    letterSpacing: 0
  },
  detailText: {
    fontFamily: 'Avenir-Black',
    fontSize: 13,
    color: Colors.darkPurple,
    letterSpacing: 0
  },
  button: {
    backgroundColor: Colors.clear,
    borderColor: Colors.red,
    color: Colors.red
  }

})
