import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 20
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FDE5FF',
    padding: 5,
    opacity: 0.5
  },
  tabText: {
    fontFamily: 'Avenir-Medium',
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 0.47,
    color: '#FDE5FF'
  },
  activeTab: {
    borderBottomColor: Colors.snow,
    opacity: 1
  },
  activeTabText: {
    color: Colors.snow
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 35
  },
  item: {
    borderWidth: 1,
    borderColor: Colors.snow
  },
  itemDetail: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: Colors.snow
  },
  itemTitle: {
    fontFamily: 'Avenir-Black',
    fontSize: 15,
    letterSpacing: 0,
    color: Colors.darkPurple
  },
  itemAction: {
    fontFamily: 'Avenir-Medium',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0,
    color: Colors.darkPurple
  }
})
