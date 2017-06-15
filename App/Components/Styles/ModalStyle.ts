import { TextStyle, ViewStyle, ImageStyle } from 'react-native'
import { ApplicationStyles, ScreenStylesType, Colors, Fonts } from '../../Themes/'

interface ModalStyleType extends ScreenStylesType {
  container: ViewStyle
  colorBump: ViewStyle
  heading: TextStyle
  description: TextStyle
  closeButton: ViewStyle
  button: ViewStyle
  closeIcon: TextStyle
  icon: ViewStyle
  text: TextStyle
}

const ModalStyle: ModalStyleType = {
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: 40
  },
  colorBump: {
    backgroundColor: Colors.transparentBump,
    flex: 1,
    justifyContent: 'space-around'
  },
  heading: {
    marginTop: 14,
    fontFamily: Fonts.type.semiBold,
    fontSize: 31,
    letterSpacing: 0.2,
    backgroundColor: Colors.transparent,
    color: Colors.snow,
    textAlign: 'center'
  },
  description: {
    textAlign: 'center',
    fontFamily: Fonts.style.medium,
    fontSize: 15,
    color: '#FDE5FF',
    letterSpacing: 0.47,
    lineHeight: 23,
    paddingVertical: 10
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
    backgroundColor: Colors.clear,
    height: 40
  },
  closeIcon: {
    color: Colors.silver,
    paddingHorizontal: 10
  },
  icon: {
    marginRight: 7
  },
  text: {
    fontFamily: Fonts.style.base,
    fontSize: 17,
    color: Colors.silver,
    backgroundColor: Colors.clear
  }
}

export default ModalStyle
