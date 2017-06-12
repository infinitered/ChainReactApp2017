import { TextStyle, ViewStyle } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

interface TimeStyles {
  container: ViewStyle
  time: TextStyle
}

const ButtonStyles: TimeStyles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: -18
  },
  time: {
    fontFamily: Fonts.type.bold,
    fontSize: 8,
    color: Colors.snow,
    backgroundColor: Colors.transparent
  }
}

export default ButtonStyles
