import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Images, Videos } from '../Themes'
import TimeIndicator from './TimeIndicator'
import BackgroundVideo from './BackgroundVideo'
import styles from './Styles/BreakStyle'

export default class Break extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      imageWidth: 335
    }
  }

  onLayout = (event) => {
    const width = event.nativeEvent.layout.width

    this.setState({
      imageWidth: width
    })
  }

  renderContent () {
    const {
      type,
      duration,
      isCurrentDay,
      isActive
    } = this.props

    const containerStyles = [
      styles.container,
      isCurrentDay && styles.currentDay,
      isActive && styles.active
    ]

    const background = Images[`${type}Break`]
    const video = Videos[type]
    const timeframe = duration > 89 ? `${duration / 60} Hours` : `${duration} Minutes`

    const imageWidth = this.state.imageWidth

    return (
      <View>
        <View style={containerStyles} onLayout={this.onLayout}>
          <Image source={background} style={[styles.background, {width: imageWidth}]} />
          <BackgroundVideo source={video} style={styles.video} isActive={isActive} />
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Text style={styles.heading}>
                {`${type.toUpperCase()} BREAK`}
              </Text>
              <Text style={styles.duration}>
                {timeframe}
              </Text>
            </View>
            {this.renderSponsor()}
          </View>
        </View>
      </View>
    )
  }

  renderSponsor () {
    const { type } = this.props

    if (type === 'coffee') {
      return (
        <View style={styles.sponsor}>
          <Image source={Images.sponsor} />
          <Text style={styles.sponsorText}>by Qlik Playground</Text>
        </View>
      )
    }
  }

  renderWrapper () {
    if (this.props.onPress) {
      return (
        <TouchableOpacity onPress={this.props.onPress}>
          {this.renderContent()}
        </TouchableOpacity>
      )
    } else {
      return this.renderContent()
    }
  }

  render () {
    const { currentTime, duration, start, isActive } = this.props

    return (
      <View>
        {this.renderWrapper()}
        {isActive && <TimeIndicator start={start} duration={duration} time={currentTime} />}
      </View>
    )
  }
}

Break.propTypes = {
  start: PropTypes.instanceOf(Date).isRequired,
  currentTime: PropTypes.instanceOf(Date).isRequired,
  duration: PropTypes.number.isRequired
}
