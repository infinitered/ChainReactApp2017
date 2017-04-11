import React, { PropTypes, Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from '../Themes'
import { format, differenceInMinutes } from 'date-fns'
import styles from './Styles/TimeIndicatorStyle'

export default class TimeIndicator extends Component {
  render () {
    const { time, start, duration } = this.props
    const formattedTime = format(time, 'h:mm')
    const top = `${(differenceInMinutes(time, start) / duration) * 100}%`

    return (
      <View style={[styles.container, {top}]}>
        <Text style={styles.time}>{formattedTime}</Text>
        <Image style={styles.icon} source={Images.sunIcon} />
      </View>
    )
  }
}

TimeIndicator.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  duration: PropTypes.number.isRequired
}
