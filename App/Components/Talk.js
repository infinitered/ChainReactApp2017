import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity, LayoutAnimation } from 'react-native'
import TalkInfo from './TalkInfo'
import TimeIndicator from './TimeIndicator'
import styles from './Styles/TalkStyle'
import PushNotification from 'react-native-push-notification'
import PNHelpers from '../Lib/PushNotificationHelpers'

export default class Talk extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  toggleReminder = () => {
    const {title, start} = this.props
    // Make a copy otherwise could be modified!!!
    const startCopy = new Date(start.valueOf())
    LayoutAnimation.easeInEaseOut()

    // turn off reminder
    // possible issues on Android: https://github.com/zo0r/react-native-push-notification/issues/368
    if (this.props.isSpecial) {
      this.props.talkNotSpecial()
      PushNotification.cancelLocalNotifications({
        id: PNHelpers.pushMessage(title, startCopy)
      })
    } else {
      // turn on reminder
      this.props.talkSpecial()
      PushNotification.localNotificationSchedule({
        message: PNHelpers.pushMessage(title, startCopy), // (required)
        date: PNHelpers.notificationTime(startCopy),
        userInfo: {id: PNHelpers.pushMessage(title, startCopy)}
      })
    }
  }

  render () {
    const {
      isCurrentDay,
      isActive,
      name,
      title,
      avatarURL,
      start,
      duration,
      currentTime,
      isFinished
    } = this.props

    const containerStyles = [
      styles.container,
      isCurrentDay && styles.currentDay,
      isActive && styles.active,
      isFinished && styles.finished
    ]

    return (
      <View>
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
              remindMe={this.props.isSpecial}
              isFinished={isFinished}
              showWhenFinished={this.props.showWhenFinished}
              toggleRemindMe={this.toggleReminder}
              onPressGithub={this.props.onPressGithub}
              onPressTwitter={this.props.onPressTwitter}
            />
          </View>
        </TouchableOpacity>
        {isActive &&
          <TimeIndicator start={start} duration={duration} time={currentTime} />
        }
      </View>
    )
  }

}

Talk.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  duration: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  onPressTwitter: PropTypes.func.isRequired,
  onPressGithub: PropTypes.func.isRequired,
  talkSpecial: PropTypes.func.isRequired,
  talkNotSpecial: PropTypes.func.isRequired,
  isFinished: PropTypes.bool.isRequired,
  showWhenFinished: PropTypes.bool.isRequired,
  isSpecial: PropTypes.bool.isRequired
}
