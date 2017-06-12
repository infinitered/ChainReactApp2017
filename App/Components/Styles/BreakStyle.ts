import { TextStyle, ViewStyle, ImageStyle } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

interface BreakStyleType {
  container: ViewStyle
  currentDay: ViewStyle
  active: ViewStyle
  background: ImageStyle
  video: ViewStyle
  contentContainer: ViewStyle
  sponsor: ViewStyle
  sponsorText: TextStyle
  content: ViewStyle
  heading: TextStyle
  duration: TextStyle
}

const BreakStyle: BreakStyleType = {
  container: {
    marginVertical: Metrics.baseMargin,
    marginHorizontal: Metrics.doubleBaseMargin,
    backgroundColor: Colors.transparent,
    height: Metrics.breakHeight
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
    flex: 2,
    resizeMode: 'cover',
    borderRadius: 5
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 5
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
    marginRight: 15
  },
  sponsorText: {
    marginTop: 4,
    fontFamily: Fonts.type.base,
    fontSize: 11,
    letterSpacing: 0,
    backgroundColor: Colors.transparent,
    color: Colors.snow
  },
  content: {
    justifyContent: 'center',
    marginLeft: 15
  },
  heading: {
    fontFamily: Fonts.type.semiBold,
    fontSize: 18,
    letterSpacing: -0.2,
    lineHeight: 27,
    backgroundColor: Colors.transparent,
    color: Colors.snow
  },
  duration: {
    fontFamily: Fonts.type.semiBold,
    fontSize: 16,
    letterSpacing: -0.19,
    backgroundColor: Colors.transparent,
    color: Colors.snow
  }
}

export default BreakStyle
