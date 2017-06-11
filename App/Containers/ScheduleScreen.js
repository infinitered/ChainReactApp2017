import React, { Component } from 'react'
import {
  AppState,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native'
import PurpleGradient from '../Components/PurpleGradient'
import DayToggle from '../Components/DayToggle'
import Talk from '../Components/Talk'
import Break from '../Components/Break'
import ScheduleActions from '../Redux/ScheduleRedux'
import { connect } from 'react-redux'
import {
  compareAsc,
  isSameDay,
  addMinutes,
  isWithinRange,
  subMilliseconds
} from 'date-fns'
import {
  merge,
  groupWith,
  contains,
  assoc,
  map
} from 'ramda'
import NotificationActions from '../Redux/NotificationRedux'
import Config from '../Config/AppConfig'
import { Images } from '../Themes'
import styles from './Styles/ScheduleScreenStyle'

const isCurrentDay = (currentTime, activeDay) =>
  isSameDay(currentTime, new Date(Config.conferenceDates[activeDay]))

const addSpecials = (specialTalksList, talks) =>
  map((talk) => assoc('special', contains(talk.title, specialTalksList), talk), talks)

class ScheduleScreen extends Component {

  constructor (props) {
    super(props)

    const mergeTimes = (e) => {
      const eventDuration = Number(e.duration)
      const eventStart = new Date(e.time)
      // ends 1 millisecond before event
      const eventEnd = subMilliseconds(addMinutes(eventStart, eventDuration), 1)

      return merge(e, { eventStart, eventEnd, eventDuration })
    }
    const sorted = [...props.schedule].map(mergeTimes).sort((a, b) => {
      return compareAsc(a.eventStart, b.eventStart)
    })
    const eventsByDay = groupWith((a, b) => isSameDay(a.eventStart, b.eventStart), sorted)

    this.state = {
      currentTime: props.currentTime,
      eventsByDay: eventsByDay,
      data: addSpecials(props.specialTalks, eventsByDay[0]),
      isCurrentDay: isCurrentDay(props.currentTime, 0),
      activeDay: 0,
      appState: AppState.currentState
    }
  }

  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeScheduleIcon : Images.inactiveScheduleIcon} />
    )
  }

  onEventPress = (item) => {
    const { navigation, setSelectedEvent } = this.props
    setSelectedEvent(item)

    item.type === 'talk'
      ? navigation.navigate('TalkDetail')
      : navigation.navigate('BreakDetail')
  }

  renderItem = ({item}) => {
    const { currentTime, isCurrentDay } = this.state
    const { eventDuration, eventStart, eventEnd, special } = item
    const isActive = isWithinRange(currentTime, eventStart, eventEnd)
    const isFinished = currentTime > eventEnd

    if (item.type === 'talk') {
      return (
        <Talk
          name={item.speaker}
          avatarURL={`https://infinite.red/images/chainreact/${item.image}.png`}
          title={item.title}
          start={eventStart}
          duration={eventDuration}
          onPress={() => this.onEventPress(item)}
          onPressTwitter={() => this.props.onPressTwitter(item.speakerInfo[0].twitter)}
          onPressGithub={() => this.props.onPressGithub(item.speakerInfo[0].github)}
          talkSpecial={() => this.props.onTalkSpecial(item.title)}
          talkNotSpecial={() => this.props.onTalkNotSpecial(item.title)}
          currentTime={currentTime}
          isCurrentDay={isCurrentDay}
          isActive={isActive}
          isSpecial={special}
          isFinished={isFinished}
          showWhenFinished
        />
      )
    } else {
      return (
        <Break
          type={item.type}
          title={item.title}
          start={eventStart}
          duration={eventDuration}
          onPress={() => this.onEventPress(item)}
          currentTime={currentTime}
          isCurrentDay={isCurrentDay}
          isActive={isActive}
        />
      )
    }
  }

  componentDidMount () {
    AppState.addEventListener('change', this._handleAppStateChange)
  }

  componentWillUnmount () {
    AppState.removeEventListener('change', this._handleAppStateChange)
  }

  _handleAppStateChange = (nextAppState) => {
    const { appState } = this.state
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      this.props.getScheduleUpdates()
    }
    this.setState({appState: nextAppState})
  }

  componentWillReceiveProps (newProps) {
    const { activeDay, eventsByDay } = this.state
    const { specialTalks } = this.props
    const { currentTime } = newProps

    // Update currentTime before updating data
    if (currentTime) {
      this.setState({ currentTime }, () => {
        this.setState({
          data: addSpecials(specialTalks, eventsByDay[activeDay]),
          isCurrentDay: isCurrentDay(currentTime, activeDay)
        })
      })
    }
  }

  setActiveDay = (activeDay) => {
    const { eventsByDay } = this.state
    const { currentTime, specialTalks } = this.props
    const data = addSpecials(specialTalks, eventsByDay[activeDay])

    this.setState({
      data,
      activeDay,
      isCurrentDay: isCurrentDay(currentTime, activeDay)
    }, () => {
      // Scroll to top on tab change or press of current tab
      this.refs.scheduleList.scrollToOffset({y: 0, animated: false})
    })
  }

  render () {
    const { isCurrentDay, activeDay, data } = this.state
    return (
      <PurpleGradient style={styles.linearGradient}>
        <DayToggle
          activeDay={activeDay}
          onPressIn={this.setActiveDay}
        />
        {isCurrentDay && <View style={styles.timeline} />}
        <FlatList
          ref='scheduleList'
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, idx) => item.eventStart}
          contentContainerStyle={styles.listContent}
        />
      </PurpleGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentTime: new Date(state.schedule.currentTime),
    schedule: state.schedule.speakerSchedule,
    specialTalks: state.notifications.specialTalks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getScheduleUpdates: () => dispatch(ScheduleActions.getScheduleUpdates()),
    setSelectedEvent: (data) => dispatch(ScheduleActions.setSelectedEvent(data)),
    onPressGithub: url => dispatch(ScheduleActions.visitGithub(url)),
    onPressTwitter: url => dispatch(ScheduleActions.visitTwitter(url)),
    onTalkSpecial: title => dispatch(NotificationActions.addTalk(title)),
    onTalkNotSpecial: title => dispatch(NotificationActions.removeTalk(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen)
