import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  mainHeading: {
    fontFamily: 'Avenir-Black',
    fontSize: 31,
    letterSpacing: 0.2,
    color: Colors.snow
  },
  address: {
    fontFamily: 'Avenir-Medium',
    fontSize: 15,
    letterSpacing: 0.47,
    lineHeight: 23,
    textAlign: 'center',
    color: '#FDE5FF'
  },
  map: {
    width: '100%',
    height: 200
  },
  mapActions: {
    paddingHorizontal: 12,
    backgroundColor: Colors.snow,
    borderTopWidth: 1,
    borderTopColor: '#C4C4C4'
  },
  getDirections: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE'
  },
  venueName: {
    fontFamily: 'Avenir-Black',
    fontSize: 17,
    letterSpacing: 0,
    color: Colors.darkPurple
  },
  venueAddress: {
    fontFamily: 'Avenir-Light',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0,
    color: Colors.lightText
  },
  directionsIcon: {
    alignItems: 'center'
  },
  directionsLabel: {
    fontFamily: 'Avenir-Medium',
    fontSize: 11,
    letterSpacing: 0,
    color: Colors.darkPurple
  },
  getRide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16
  },
  getRideLabel: {
    fontFamily: 'Avenir-Medium',
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 0.5,
    color: Colors.darkPurple
  },
  getRideIcon: {
    marginHorizontal: 10
  },
  rideOptions: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 0,
    overflow: 'hidden',
    backgroundColor: '#EDEDED',
    shadowColor: '#C1C1C1',
    shadowOffset: {
      x: 0,
      y: -1
    }
  },
  flip: {
    transform: [{
      rotate: '180 deg'
    }]
  },
  nearby: {
    alignItems: 'center',
    paddingTop: 40
  }
})
