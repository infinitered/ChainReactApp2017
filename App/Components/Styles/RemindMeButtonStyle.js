import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: Colors.red,
    borderRadius: 100,
    backgroundColor: Colors.clear
  },
  activeButton: {
    backgroundColor: Colors.red
  },
  icon: {
    marginRight: 7
  },
  text: {
    fontFamily: 'Avenir-Medium',
    fontSize: 11,
    color: Colors.red
  },
  activeText: {
    color: Colors.snow
  }
})
