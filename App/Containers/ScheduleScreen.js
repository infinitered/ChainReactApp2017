import React, { Component } from 'react'
import { AppState, View, Image, FlatList } from 'react-native'
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
  map,
  sum,
  findIndex
} from 'ramda'
import NotificationActions from '../Redux/NotificationRedux'
import Config from '../Config/AppConfig'
import { Images } from '../Themes'
import styles from './Styles/ScheduleScreenStyle'

const isActiveCurrentDay = (currentTime, activeDay) =>
  isSameDay(currentTime, new Date(Config.conferenceDates[activeDay]))

const addSpecials = (specialTalksList, talks) =>
  map((talk) => assoc('special', contains(talk.title, specialTalksList), talk), talks)

class ScheduleScreen extends Component {
  constructor (props) {
    super(props)

    const { schedule, specialTalks, currentTime } = props
    const eventsByDay = this.getEventsByDayFromSchedule(schedule)
    const activeDay = 0
    const data = addSpecials(specialTalks, eventsByDay[activeDay])
    const isCurrentDay = isActiveCurrentDay(currentTime, activeDay)
    const appState = AppState.currentState

    this.state = {eventsByDay, data, isCurrentDay, activeDay, appState}
  }

  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ focused }) => (
      <Image
        source={
          focused
            ? Images.activeScheduleIcon
            : Images.inactiveScheduleIcon
        }
      />
    )
  }

  getEventsByDayFromSchedule = (schedule) => {
    const mergeTimes = (e) => {
      const eventDuration = Number(e.duration)
      const eventStart = new Date(e.time)
      const eventFinal = addMinutes(eventStart, eventDuration)
      // ends 1 millisecond before event
      const eventEnd = subMilliseconds(eventFinal, 1)

      return merge(e, { eventStart, eventEnd, eventDuration, eventFinal })
    }
    const sorted = [...schedule].map(mergeTimes).sort((a, b) => {
      return compareAsc(a.eventStart, b.eventStart)
    })
    return groupWith((a, b) => isSameDay(a.eventStart, b.eventStart), sorted)
  }

  onEventPress = (item) => {
    const { navigation, setSelectedEvent } = this.props
    setSelectedEvent(item)

    item.type === 'talk'
      ? navigation.navigate('TalkDetail')
      : navigation.navigate('BreakDetail')
  }

  componentDidMount () {
    AppState.addEventListener('change', this._handleAppStateChange)

    const { data } = this.state
    const index = this.getActiveIndex(data)
    // fixes https://github.com/facebook/react-native/issues/13202
    const wait = new Promise((resolve) => setTimeout(resolve, 200))
    wait.then(() => {
      this.refs.scheduleList.scrollToIndex({index, animated: false})
    })
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
    const { specialTalks, currentTime, schedule } = newProps

    // Update currentTime before updating data
    if (currentTime) {
      this.setState({ currentTime }, () => {
        this.setState({
          data: addSpecials(specialTalks, eventsByDay[activeDay]),
          eventsByDay: this.getEventsByDayFromSchedule(schedule),
          isCurrentDay: isActiveCurrentDay(currentTime, activeDay)
        })
      })
    }
  }

  getActiveIndex = (data) => {
    const { currentTime } = this.props
    const foundIndex = findIndex((i) => isWithinRange(currentTime, i.eventStart, i.eventEnd))(data)

    // handle pre-event and overscroll
    if (foundIndex < 0) {
      return 0
    } else if (foundIndex > data.length - 3) {
      return data.length - 3
    } else {
      return foundIndex
    }
  }

  setActiveDay = (activeDay) => {
    const { eventsByDay } = this.state
    const { currentTime, specialTalks } = this.props
    const data = addSpecials(specialTalks, eventsByDay[activeDay])
    const isCurrentDay = isActiveCurrentDay(currentTime, activeDay)

    this.setState({data, activeDay, isCurrentDay}, () => {
      if (isCurrentDay) {
        // Scroll to active
        const index = this.getActiveIndex(data)
        this.refs.scheduleList.scrollToIndex({index, animated: false})
      } else {
        // Scroll to top
        this.refs.scheduleList.scrollToOffset({y: 0, animated: false})
      }
    })
  }

  getItemLayout = (data, index) => {
    const item = data[index]
    const itemLength = (item, index) => {
      if (item.type === 'talk') {
        // use best guess for variable height rows
        return 138 + (1.002936 * item.title.length + 6.77378)
      } else {
        return 145
      }
    }
    const length = itemLength(item)
    const offset = sum(data.slice(0, index).map(itemLength))
    return { length, offset, index }
  }

  // if value exists, create the function calling it, otherwise false
  funcOrFalse = (func, val) => val ? () => func.call(this, val) : false

  renderItem = ({item}) => {
    const { isCurrentDay } = this.state
    const { currentTime, setReminder, removeReminder } = this.props
    const { eventDuration, eventStart, eventEnd, eventFinal, special } = item
    const isActive = isWithinRange(currentTime, eventStart, eventEnd)
    const isFinished = currentTime > eventEnd

    if (item.type === 'talk') {
      return (
        <Talk
          type={item.type}
          name={item.speaker}
          avatarURL={`https://infinite.red/images/chainreact/${item.image}.png`}
          title={item.title}
          start={eventStart}
          duration={eventDuration}
          onPress={() => this.onEventPress(item)}
          onPressTwitter={this.funcOrFalse(this.props.onPressTwitter, item.speakerInfo[0].twitter)}
          onPressGithub={this.funcOrFalse(this.props.onPressGithub, item.speakerInfo[0].github)}
          setReminder={() => setReminder(item.title)}
          removeReminder={() => removeReminder(item.title)}
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
          end={eventFinal}
          duration={eventDuration}
          onPress={() => this.onEventPress(item)}
          currentTime={currentTime}
          isCurrentDay={isCurrentDay}
          isActive={isActive}
        />
      )
    }
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
          extraData={this.props}
          renderItem={this.renderItem}
          keyExtractor={(item, idx) => item.eventStart}
          contentContainerStyle={styles.listContent}
          getItemLayout={this.getItemLayout}
          showsVerticalScrollIndicator={false}
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
    setSelectedEvent: data => dispatch(ScheduleActions.setSelectedEvent(data)),
    onPressGithub: url => dispatch(ScheduleActions.visitGithub(url)),
    onPressTwitter: url => dispatch(ScheduleActions.visitTwitter(url)),
    setReminder: title => dispatch(NotificationActions.addTalk(title)),
    removeReminder: title => dispatch(NotificationActions.removeTalk(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen)
