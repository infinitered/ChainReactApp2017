import { TextStyle, ViewStyle } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

interface FullButtonStyles {
  button: ViewStyle,
  buttonText: TextStyle
}

const ButtonStyles: FullButtonStyles = {
  button: {
    marginVertical: 5,
    borderTopColor: Colors.fire,
    borderBottomColor: Colors.bloodOrange,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.ember
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
}

export default ButtonStyles
