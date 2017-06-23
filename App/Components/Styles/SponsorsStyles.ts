import { TextStyle, ViewStyle, ImageStyle } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

interface SponsorStyles {
  sponsors: ViewStyle
  heading: TextStyle
  description: TextStyle
  sponsorTierTitle: TextStyle
  sponsorTier: ViewStyle
  sponsor: ViewStyle
  lowTier: ImageStyle
}

const SponsorsStyles: SponsorStyles = {
  sponsors: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 30,
    backgroundColor: Colors.transparent
  },
  heading: {
    marginTop: 14,
    fontFamily: Fonts.type.bold,
    fontSize: 31,
    letterSpacing: 0.2,
    backgroundColor: Colors.transparent,
    color: Colors.snow
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: '#FDE5FF',
    letterSpacing: 0.47,
    lineHeight: 23
  },
  sponsorTierTitle: {
    marginTop: 60,
    marginBottom: Metrics.baseMargin,
    fontFamily: Fonts.type.bold,
    fontSize: 15,
    color: Colors.snow,
    opacity: 0.6,
    letterSpacing: 0.5,
    lineHeight: 23
  },
  sponsorTier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth,
    flexWrap: 'wrap'
  },
  sponsor: {
    margin: 15,
    flexShrink: 0,
    alignItems: 'center'
  },
  lowTier: {
    marginHorizontal: 25
  }
}

export default SponsorsStyles
