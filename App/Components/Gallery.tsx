import React from 'react'
import { TouchableOpacity, Image, View, Text, LayoutAnimation, TouchableWithoutFeedback } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/GalleryStyle'
import Sound from 'react-native-sound'

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

  componentDidMount () {
    this.coffee = new Sound('coffee.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
      }
    })
  }

  playSound () {
    this.coffee.play().setVolume(1.0)
  }

  renderTab = (tab) => {
    const { activeTab } = this.state
    const isActive = activeTab === tab
    return (
      <TouchableOpacity
        key={tab}
        style={[styles.tab, isActive && styles.activeTab]}
        onPress={() => this.setActiveTab(tab)}
        delayLongPress={3000}
        onLongPress={() => this.playSound()}>
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>
          {tab}
        </Text>
      </TouchableOpacity>
    )
  }

  renderItem = (itemData) => {
    const { onItemPress } = this.props
    const { name, image, link } = itemData
    return (
      <TouchableWithoutFeedback
        key={name}
        onPress={() => onItemPress(link)}>
        <View style={styles.item}>
          <Image source={Images[image]} resizeMode={'cover'} style={styles.itemImage} />
          <View style={styles.itemDetail}>
            <Text style={styles.itemTitle}>{name}</Text>
            <Text style={styles.itemAction}>
              More&nbsp;
              <Image source={Images.purpleArrowIcon} />
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
