import { TextStyle, ViewStyle, ImageStyle } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

interface GalleryStyleType {
  container: ViewStyle
  tabs: ViewStyle
  tab: ViewStyle
  tabText: TextStyle
  activeTab: ViewStyle
  activeTabText: TextStyle
  gallery: ViewStyle
  item: ViewStyle
  itemTitle: TextStyle
  itemDetail: ViewStyle
  itemImage: ImageStyle
  itemAction: TextStyle
}

const GalleryStyle: GalleryStyleType = {
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
    borderBottomColor: 'rgba(253,229,255,0.5)',
    padding: 5
  },
  tabText: {
    fontFamily: Fonts.type.base,
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 0.47,
    color: 'rgba(253,229,255,0.5)'
  },
  activeTab: {
    borderBottomColor: Colors.snow
  },
  activeTabText: {
    color: Colors.snow
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 35
  },
  item: {
    margin: 5,
    borderWidth: 1,
    borderColor: Colors.snow,
    width: Metrics.screenWidth / 2 - 10
  },
  itemImage: {
    width: Metrics.screenWidth / 2 - 10 - 2
  },
  itemDetail: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: Colors.snow
  },
  itemTitle: {
    fontFamily: Fonts.type.semiBold,
    fontSize: 15,
    letterSpacing: 0,
    minHeight: 40,
    color: Colors.darkPurple
  },
  itemAction: {
    fontFamily: Fonts.type.medium,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0,
    color: Colors.darkPurple
  }
}

export default GalleryStyle
