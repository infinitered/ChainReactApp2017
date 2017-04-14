import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import TalkInfo from './TalkInfo'
import TimeIndicator from './TimeIndicator'
import styles from './Styles/TalkStyle'
import PushNotification from 'react-native-push-notification'

export default class Talk extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      sendReminder: false,
      isActive: false
    }
  }

  toggleReminder () {
    this.setState((prevProps) => ({sendReminder: !prevProps.sendReminder}))
    PushNotification.localNotification({message: 'TEST NOTIFICATION'})
  }

  render () {
    const { sendReminder } = this.state
    const {
      isCurrentDay,
      isActive,
      name,
      title,
      avatarURL,
      start,
      duration,
      currentTime
    } = this.props

    const containerStyles = [
      styles.container,
      isCurrentDay && styles.currentDay,
      isActive && styles.active
    ]

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={containerStyles}>
          <View style={styles.info}>
            <View style={styles.infoText}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.title}>{title}</Text>
            </View>
            <Image style={styles.avatar} source={{uri: avatarURL}} />
          </View>
          <TalkInfo
            start={start}
            duration={duration}
            remindMe={sendReminder}
            toggleRemindMe={() => this.toggleReminder()}
          />
        </View>
        {isActive &&
          <TimeIndicator start={start} duration={duration} time={currentTime} />
        }
      </TouchableOpacity>
    )
  }

}

Talk.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  duration: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired
}
