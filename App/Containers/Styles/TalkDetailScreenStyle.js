import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginTop: 101,
    marginBottom: Metrics.doubleBaseMargin,
    marginHorizontal: Metrics.doubleBaseMargin
  },
  backButton: {
    position: 'absolute',
    top: -59,
    left: -10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  backButtonIcon: {
    marginRight: 5
  },
  backButtonText: {
    fontFamily: 'Montserrat-Light',
    fontSize: 17,
    letterSpacing: 0,
    backgroundColor: Colors.transparent,
    color: 'rgba(255,255,255,0.80)'
  },
  cardShadow1: {
    flex: 1,
    height: 5,
    marginHorizontal: 10,
    backgroundColor: Colors.purpleShadow1,
    borderTopLeftRadius: Metrics.cardRadius,
    borderTopRightRadius: Metrics.cardRadius
  },
  cardShadow2: {
    flex: 1,
    height: 6,
    marginHorizontal: 5,
    backgroundColor: Colors.purpleShadow2,
    borderTopLeftRadius: Metrics.cardRadius,
    borderTopRightRadius: Metrics.cardRadius
  },
  card: {
    paddingTop: 48,
    paddingHorizontal: 30,
    borderTopLeftRadius: Metrics.cardRadius,
    borderTopRightRadius: Metrics.cardRadius,
    backgroundColor: Colors.snow
  },
  avatar: {
    position: 'absolute',
    top: -43,
    left: (Metrics.screenWidth - (Metrics.doubleBaseMargin * 2)) / 2 - 53,
    height: 106,
    width: 106,
    borderRadius: 53,
    borderColor: Colors.snow,
    borderWidth: 1,
    zIndex: 4
  },
  sectionHeading: {
    alignSelf: 'flex-start',
    marginBottom: 12,
    fontFamily: 'Montserrat-Light',
    fontSize: 11,
    letterSpacing: 3,
    color: Colors.lightText
  },
  heading: {
    marginBottom: 5,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    letterSpacing: 0,
    color: Colors.darkPurple
  },
  description: {
    marginBottom: 30,
    fontFamily: 'Montserrat-Light',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 24,
    color: Colors.lightText
  },
  social: {
    flexDirection: 'row',
    marginBottom: 30
  }
})
