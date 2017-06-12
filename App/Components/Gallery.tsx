import React from 'react'
import { TouchableOpacity, Image, View, Text, LayoutAnimation } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/GalleryStyle'

interface GalleryProps {
  data: Object
  onItemPress: (daddr: string) => void
}

interface GalleryState {
  activeTab: string
}

export default class Gallery extends React.Component<GalleryProps, GalleryState> {
  constructor (props) {
    super(props)

    this.state = {
      activeTab: Object.keys(props.data)[0]
    }
  }

  setActiveTab = (tab) => {
    LayoutAnimation.configureNext({...LayoutAnimation.Presets.linear, duration: 250})
    this.setState({activeTab: tab})
  }

  renderTab = (tab) => {
    const { activeTab } = this.state
    const isActive = activeTab === tab
    return (
      <TouchableOpacity
        key={tab}
        style={[styles.tab, isActive && styles.activeTab]}
        onPress={() => this.setActiveTab(tab)}>
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>
          {tab}
        </Text>
      </TouchableOpacity>
    )
  }

  renderItem = (itemData) => {
    const { onItemPress } = this.props
    const { name, image, address } = itemData
    const daddr = address.replace(/\s/, '+')
    return (
      <TouchableOpacity
        key={name}
        style={styles.item}
        onPress={() => onItemPress(daddr)}>
        <Image source={Images[image]} />
        <View style={styles.itemDetail}>
          <Text style={styles.itemTitle}>{name}</Text>
          <Text style={styles.itemAction}>
            Directions&nbsp;
            <Image source={Images.purpleArrowIcon} />
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    const { activeTab } = this.state
    const { data } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          { Object.keys(data).map((t) => this.renderTab(t)) }
        </View>
        <View style={styles.gallery}>
          { data[activeTab].map(this.renderItem) }
        </View>
      </View>
    )
  }
}
