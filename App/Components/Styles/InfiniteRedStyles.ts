import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  infiniteRed: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40
  },
  heading: {
    fontFamily: Fonts.type.description,
    fontSize: 13,
    letterSpacing: 0.2,
    backgroundColor: Colors.transparent,
    color: '#FDE5FF'
  },
  infiniteRedIcon: {
    marginTop: 15
  },
  line: {
    marginTop: 30,
    marginBottom: 30,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    borderBottomWidth: 1,
    height: 0,
    width: '80%'
  },
  subheading: {
    marginBottom: 30,
    fontFamily: Fonts.type.description,
    fontSize: 15,
    letterSpacing: 0.5,
    backgroundColor: Colors.transparent,
    color: Colors.snow,
    textAlign: 'center'
  },
  infiniteredButton: {
    marginTop: 25
  }
})
