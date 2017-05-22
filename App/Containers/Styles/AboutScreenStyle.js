import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

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
    fontFamily: 'Avenir-Black',
    fontSize: 31,
    letterSpacing: 0.2,
    backgroundColor: Colors.transparent,
    color: Colors.snow
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Avenir-Medium',
    fontSize: 15,
    color: '#FDE5FF',
    letterSpacing: 0.47,
    lineHeight: 23
  },
  hashtag: {
    fontFamily: 'Avenir-Black',
    color: Colors.snow
  },
  twitter: {
    ...section,
    borderBottomColor: '#7B5888',
    borderBottomWidth: 1
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
    fontFamily: 'Avenir-Black',
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
