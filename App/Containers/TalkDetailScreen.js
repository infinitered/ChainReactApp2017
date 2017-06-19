import React from 'react'
import { ScrollView, Text, View, Image, TouchableOpacity, LayoutAnimation } from 'react-native'
import PurpleGradient from '../Components/PurpleGradient'
import TalkInfo from '../Components/TalkInfo'
import SocialMediaButton from '../Components/SocialMediaButton'
import { NavigationActions } from 'react-navigation'
import ScheduleActions from '../Redux/ScheduleRedux'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
import styles from './Styles/TalkDetailScreenStyle'
import NotificationActions from '../Redux/NotificationRedux'
import PushNotification from 'react-native-push-notification'
import PNHelpers from '../Lib/PushNotificationHelpers'
import { contains } from 'ramda'

class TalkDetail extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeScheduleIcon : Images.inactiveScheduleIcon} />
    )
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  renderSpeaker = (speaker, index) => {
    return (
      <View key={index}>
        <Text style={styles.heading}>
          {speaker.name}
        </Text>
        <Text style={styles.description}>
          {speaker.bio}
        </Text>
        <View style={styles.social}>
          <SocialMediaButton
            network='twitter'
            spacing='right'
            onPress={() => this.props.onPressTwitter(speaker.twitter)}
          />
          <SocialMediaButton
            network='github'
            spacing='right'
            onPress={() => this.props.onPressGithub(speaker.github)}
          />
        </View>
      </View>
    )
  }

  isSpecial = () => contains(this.props.title, this.props.specialTalks)

  renderSpeakers = () => {
    const { speakerInfo } = this.props

    return (speakerInfo.map((speaker, index) => this.renderSpeaker(speaker, index)))
  }

  // TODO:  Move the 2 toggleReminder buttons to a single file in /Lib
  toggleReminder = () => {
    const {title, eventStart} = this.props
    // Make a copy otherwise could be modified!!!
    const startCopy = new Date(eventStart.valueOf())
    LayoutAnimation.easeInEaseOut()

    // turn off reminder
    // possible issues on Android: https://github.com/zo0r/react-native-push-notification/issues/368
    if (this.isSpecial()) {
      this.props.talkNotSpecial(title)
      PushNotification.cancelLocalNotifications({
        id: PNHelpers.pushMessage(title, startCopy)
      })
    } else {
      // turn on reminder
      this.props.talkSpecial(title)
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
    return (
      <PurpleGradient style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
              <Image style={styles.backButtonIcon} source={Images.arrowIcon} />
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <View style={styles.cardShadow1} />
            <View style={styles.cardShadow2} />
            <Image
              style={styles.avatar}
              source={{uri: `https://infinite.red/images/chainreact/${this.props.image}.png`}}
            />
            <View style={styles.card}>
              <Text style={styles.sectionHeading}>
                TALK
              </Text>
              <Text style={styles.heading}>
                {this.props.title}
              </Text>
              <Text style={styles.description}>
                {this.props.description}
              </Text>
              <Text style={styles.sectionHeading}>
                ABOUT
              </Text>
              {this.renderSpeakers()}
            </View>
            <TalkInfo
              start={new Date(this.props.eventStart)}
              duration={Number(this.props.duration)}
              remindMe={this.isSpecial()}
              toggleRemindMe={this.toggleReminder}
              onPressGithub={this.props.onPressGithub}
              onPressTwitter={this.props.onPressTwitter}
              isFinished={this.props.currentTime > this.props.eventStart}
              showWhenFinished={false}
            />
          </View>
        </ScrollView>
      </PurpleGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.schedule.selectedEvent,
    currentTime: new Date(state.schedule.currentTime),
    specialTalks: state.notifications.specialTalks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPressGithub: url => dispatch(ScheduleActions.visitGithub(url)),
    onPressTwitter: url => dispatch(ScheduleActions.visitTwitter(url)),
    talkSpecial: title => dispatch(NotificationActions.addTalk(title)),
    talkNotSpecial: title => dispatch(NotificationActions.removeTalk(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkDetail)
