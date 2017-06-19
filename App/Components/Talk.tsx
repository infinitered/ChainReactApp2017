import React from 'react'
import { View, Text, Image, TouchableOpacity, LayoutAnimation } from 'react-native'
import TalkInfo from './TalkInfo'
import TimeIndicator from './TimeIndicator'
import styles from './Styles/TalkStyle'
import PushNotification from 'react-native-push-notification'
import PNHelpers from '../Lib/PushNotificationHelpers'
import SBHelper from '../Lib/SpecialButtonHelper'

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
      isFinished,
      isSpecial,
      setReminder,
      removeReminder
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
              toggleRemindMe={SBHelper.toggleReminder(title, start, isSpecial, setReminder, removeReminder)}
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
