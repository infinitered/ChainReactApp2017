import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

interface AnnouncementStyleType {
  afterPartyContainer: ViewStyle
  partyHeader: ViewStyle
  partyInfo: ViewStyle
  partyButton: ViewStyle
  partyButtonText: TextStyle
  welcomeParty: TextStyle
  partyDescription: TextStyle
}

const AnnouncementStyle: AnnouncementStyleType = {
  afterPartyContainer: {
    flex: 3,
    borderTopWidth: 1,
    borderTopColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.transparent
  },
  partyHeader: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  partyInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  partyButton: {
    width: 200,
    top: -20,
    left: (Metrics.screenWidth - 200) / 2,
    backgroundColor: Colors.snow
  },
  partyButtonText: {
    fontSize: 11,
    fontFamily: Fonts.type.base,
    color: Colors.lightText,
    letterSpacing: 1,
    fontWeight: '600'
  },
  welcomeParty: {
    fontSize: 31,
    fontFamily: Fonts.type.base,
    color: Colors.snow,
    letterSpacing: 2,
    fontWeight: '600',
    marginTop: Metrics.doubleBaseMargin,
    marginHorizontal: Metrics.baseMargin,
    textAlign: 'center'
  },
  partyDescription: {
    fontSize: 13,
    fontFamily: Fonts.type.base,
    color: Colors.snow,
    letterSpacing: 2,
    fontWeight: '600',
    lineHeight: 24
  }
}

export default AnnouncementStyle
