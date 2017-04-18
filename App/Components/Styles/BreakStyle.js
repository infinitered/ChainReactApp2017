import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: Metrics.baseMargin,
    marginHorizontal: Metrics.doubleBaseMargin
  },
  currentDay: {
    marginLeft: 16,
    marginRight: 24
  },
  active: {
    marginLeft: 6,
    marginRight: 34,
    borderRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 5,
    shadowColor: Colors.redShadow,
    shadowOpacity: 1
  },
  background: {
    flex: 1,
    resizeMode: 'cover'
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.snow
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sponsor: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25
  },
  sponsorText: {
    marginTop: 4,
    fontFamily: 'Avenir-Light',
    fontSize: 11,
    letterSpacing: 0,
    backgroundColor: Colors.transparent,
    color: Colors.snow
  },
  content: {
    justifyContent: 'center',
    marginHorizontal: 25
  },
  heading: {
    fontFamily: 'Avenir-Black',
    fontSize: 23,
    letterSpacing: -0.2,
    lineHeight: 27,
    backgroundColor: Colors.transparent,
    color: Colors.snow
  },
  duration: {
    fontFamily: 'Avenir-Black',
    fontSize: 16,
    letterSpacing: -0.19,
    backgroundColor: Colors.transparent,
    color: Colors.snow
  }
})
