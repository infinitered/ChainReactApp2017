import { TextStyle, ViewStyle } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

interface RemindMeButtonStyleType {
  button: ViewStyle
  activeButton: ViewStyle
  icon: ViewStyle
  text: TextStyle
  activeText: TextStyle
}

const RemindMeButtonStyle: RemindMeButtonStyleType = {
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: Colors.red,
    borderRadius: 100,
    backgroundColor: Colors.clear,
    height: 34
  },
  activeButton: {
    backgroundColor: Colors.red
  },
  icon: {
    marginRight: 7
  },
  text: {
    fontFamily: Fonts.type.medium,
    fontSize: 11,
    color: Colors.red
  },
  activeText: {
    color: Colors.snow
  }
}

export default RemindMeButtonStyle
