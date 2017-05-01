import React, { PropTypes, Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Images, Videos } from '../Themes'
import TimeIndicator from './TimeIndicator'
import BackgroundVideo from './BackgroundVideo'
import styles from './Styles/BreakStyle'

export default class Break extends Component {
  renderContent () {
    const {
      type,
      start,
      duration,
      currentTime,
      isCurrentDay,
      isActive
    } = this.props

    const containerStyles = [
      styles.container,
      isCurrentDay && styles.currentDay,
      isActive && styles.active
    ]

    const background = type === 'lunch' ? Images.lunchBreak : Images.coffeeBreak
    const video = type === 'lunch' ? Videos.lunch : Videos.coffee

    return (
      <View>
        <View style={containerStyles}>
          <Image source={background} style={styles.background} />
          <BackgroundVideo source={video} style={styles.video} isActive={isActive} />
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Text style={styles.heading}>
                {`${type.toUpperCase()} BREAK`}
              </Text>
              <Text style={styles.duration}>
                {`${duration} Minutes`}
              </Text>
            </View>
            <View style={styles.sponsor}>
              <Image source={Images.sponsor} />
              <Text style={styles.sponsorText}>by Qlik Playground</Text>
            </View>
          </View>
        </View>
        {isActive &&
          <TimeIndicator start={start} duration={duration} time={currentTime} />
        }
      </View>
    )
  }

  render () {
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
}

Break.propTypes = {
  start: PropTypes.instanceOf(Date).isRequired,
  currentTime: PropTypes.instanceOf(Date).isRequired,
  duration: PropTypes.number.isRequired
}
