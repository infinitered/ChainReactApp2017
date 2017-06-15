import { TextStyle, ViewStyle } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

interface RoundedButtonStylesType {
  button: ViewStyle
  buttonText: TextStyle
}

const RoundedButtonStyles: RoundedButtonStylesType = {
  button: {
    borderWidth: 1,
    borderColor: Colors.snow,
    borderRadius: 100,
    paddingHorizontal: 25,
    paddingVertical: 12,
    backgroundColor: Colors.transparent,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: Fonts.type.bold,
    fontSize: 11,
    letterSpacing: 0,
    color: Colors.snow
  }
}

export default RoundedButtonStyles
