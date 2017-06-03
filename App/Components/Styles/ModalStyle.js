import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: 40
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
  closeButton: {
    position: 'absolute',
    paddingTop: 30,
    paddingHorizontal: 10,
    zIndex: 10
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.red,
    borderRadius: 100,
    backgroundColor: Colors.clear,
    height: 40
  },
  closeIcon: {
    color: Colors.red,
    paddingHorizontal: 10
  },
  icon: {
    marginRight: 7
  },
  text: {
    fontFamily: 'Avenir-Medium',
    fontSize: 11,
    color: Colors.red
  }
})
