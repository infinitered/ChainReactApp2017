import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginTop: 89,
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
    paddingTop: 20,
    paddingHorizontal: 10,
    borderRadius: Metrics.cardRadius,
    backgroundColor: Colors.snow
  },
  mainImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    backgroundColor: Colors.transparent
  },
  mainImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  mainHeadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  breakHeading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 23,
    letterSpacing: -0.2,
    lineHeight: 27,
    color: Colors.snow
  },
  breakDuration: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    letterSpacing: -0.19,
    color: Colors.snow
  },
  meridiem: {
    fontSize: 11,
    color: Colors.snow
  },
  content: {
    paddingTop: 28,
    paddingHorizontal: 10
  },
  heading: {
    marginBottom: 5,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    letterSpacing: 0,
    color: Colors.darkPurple
  },
  descriptionContainer: {
    marginBottom: 15,
    paddingLeft: 5
  },
  description: {
    fontFamily: 'Montserrat-Light',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 24,
    color: Colors.lightText
  }
})
