import React from 'react'
import { View, Text, Image, TouchableOpacity, LayoutAnimation } from 'react-native'
import TalkInfo from './TalkInfo'
import TimeIndicator from './TimeIndicator'
import styles from './Styles/TalkStyle'
import PushNotification from 'react-native-push-notification'
import PNHelpers from '../Lib/PushNotificationHelpers'

interface TalkProps {
  title: string
  name: string
  avatarURL: string
  start: Date
  duration: number
  isFinished: boolean
  showWhenFinished: boolean
  isSpecial: boolean
  isCurrentDay: boolean
  isActive: boolean
  currentTime: Date
  onPress (): void
  onPressTwitter (): void
  onPressGithub (): void
  talkSpecial (): void
  talkNotSpecial (): void
}

interface TalkState {
  isActive: boolean
}

export default class Talk extends React.Component<TalkProps, TalkState> {
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
    if (this.props.isSpecial) {
      this.props.talkNotSpecial()
      PushNotification.cancelLocalNotifications({
        id: PNHelpers.pushId(title, startCopy) // cancel both iOS and Android
      })
    } else {
      // turn on reminder
      this.props.talkSpecial()
      PushNotification.localNotificationSchedule({
        id: PNHelpers.pushId(title, startCopy), // for android cancel
        number: 0,
        message: PNHelpers.pushMessage(title, startCopy), // (required)
        date: PNHelpers.notificationTime(startCopy),
        userInfo: {id: PNHelpers.pushId(title, startCopy)} // for iOS cancel
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
              isFinished={isFinished || isActive}
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
