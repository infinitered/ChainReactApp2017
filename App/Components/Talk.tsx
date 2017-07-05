import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, LayoutAnimation, Animated } from 'react-native'
import TalkInfo from './TalkInfo'
import TimeIndicator from './TimeIndicator'
import styles from './Styles/TalkStyle'
import PushNotification from 'react-native-push-notification'
import PNHelpers from '../Lib/PushNotificationHelpers'
import SBHelper from '../Lib/SpecialButtonHelper'
import FadeIn from 'react-native-fade-in-image'

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
  setReminder (): void
  removeReminder (): void
}

interface TalkState {
  isActive: boolean,
  animatedSize: Animated.Value
}

export default class Talk extends React.Component<TalkProps, TalkState> {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false,
      animatedSize: new Animated.Value(1)
    }
  }

  handlePressIn = () => {
    Animated.spring(this.state.animatedSize, {
      toValue: 1.05,
      useNativeDriver: true
    }).start()
  }

  handlePressOut = () => {
    Animated.spring(this.state.animatedSize, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true
    }).start()
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

    const animatedStyle = {
      transform: [{ scale: this.state.animatedSize }]
    }

    const containerStyles = [
      styles.container,
      isCurrentDay && styles.currentDay,
      isActive && styles.active,
      isFinished && styles.finished,
      animatedStyle
    ]

    return (
      <View>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
          onPress={this.props.onPress}
        >
          <Animated.View style={containerStyles}>
            <View style={styles.info}>
              <View style={styles.infoText}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.title}>{title}</Text>
              </View>
              <FadeIn>
                <Image style={styles.avatar} source={{uri: avatarURL}} />
              </FadeIn>
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
          </Animated.View>
        </TouchableWithoutFeedback>
        {isActive &&
          <TimeIndicator start={start} duration={duration} time={currentTime} />
        }
      </View>
    )
  }
}
