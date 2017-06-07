import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

const section = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 20,
  paddingVertical: 50,
  backgroundColor: Colors.transparent
}

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  heading: {
    marginTop: 14,
    fontFamily: 'Montserrat-SemiBold',
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
  hashtag: {
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.snow
  },
  twitter: {
    ...section
  },
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
    marginTop: Metrics.doubleBaseMargin
  },
  partyDescription: {
    fontSize: 13,
    fontFamily: Fonts.type.base,
    color: Colors.snow,
    letterSpacing: 2,
    fontWeight: '600',
    lineHeight: 24
  },
  tabsContainer: {
    flex: 1,
    backgroundColor: Colors.transparent,
    marginVertical: Metrics.doubleBaseMargin
  },
  tabs: {
    flexDirection: 'row'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(253,229,255,0.5)',
    padding: Metrics.baseMargin
  },
  activeTab: {
    borderBottomColor: Colors.snow
  },
  tabText: {
    fontFamily: Fonts.type.base,
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 0.47,
    color: 'rgba(253,229,255,0.5)'
  },
  activeTabText: {
    fontWeight: '600',
    color: Colors.snow
  },
  sponsors: {
    ...section,
    paddingTop: 30
  },
  slack: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 55,
    paddingBottom: 35
  },
  slackButton: {
    marginTop: 25
  },
  sponsorTierTitle: {
    marginTop: 60,
    marginBottom: 30,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: Colors.snow,
    letterSpacing: 0.47,
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
    flexShrink: 0
  },
  goldSponsor: {

  }
})
