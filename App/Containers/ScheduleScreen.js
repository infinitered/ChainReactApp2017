import React from 'react'
import {
  View,
  ListView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import PurpleGradient from '../Components/PurpleGradient'
import Talk from '../Components/Talk'
import Break from '../Components/Break'
import ScheduleActions from '../Redux/ScheduleRedux'
import { connect } from 'react-redux'
import { compareAsc, isSameDay, addMinutes, isWithinRange } from 'date-fns'
import { merge, groupWith } from 'ramda'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import { Images } from '../Themes'
import styles from './Styles/TalksScreenStyle'

const isCurrentDay = (currentTime, activeDay) =>
  isSameDay(currentTime, new Date(['7/17/2017', '7/18/2017'][activeDay]))

class ScheduleScreen extends React.Component {

  constructor (props) {
    super(props)

    const { schedule } = require('../Fixtures/schedule.json')
    const mergeTimes = (e) => {
      const eventDuration = Number(e.duration)
      const eventStart = new Date(e.time)
      const eventEnd = addMinutes(eventStart, eventDuration - 1)

      return merge(e, { eventStart, eventEnd, eventDuration })
    }
    const sorted = schedule.map(mergeTimes).sort((a, b) => {
      return compareAsc(a.eventStart, b.eventStart)
    })
    const eventsByDay = groupWith((a, b) => isSameDay(a.eventStart, b.eventStart), sorted)

    const rowHasChanged = (r1, r2) => {
      const { currentTime } = this.state
      const { eventStart, eventEnd } = r2
      const isActive = isWithinRange(currentTime, eventStart, eventEnd)

      return r1 !== r2 || isActive
    }
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      currentTime: props.currentTime,
      eventsByDay: eventsByDay,
      dataSource: ds.cloneWithRows(eventsByDay[0]),
      isCurrentDay: isCurrentDay(this.props.currentTime, 0),
      activeDay: 0
    }
  }

  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeScheduleIcon : Images.inactiveScheduleIcon} />
    )
  }

  onEventPress = (rowData) => {
    const { navigation, setSelectedEvent } = this.props
    setSelectedEvent(rowData)

    rowData.type === 'talk'
      ? navigation.navigate('TalkDetail')
      : navigation.navigate('BreakDetail')
  }

  renderRow = (rowData) => {
    const { currentTime, isCurrentDay } = this.state
    const { eventDuration, eventStart, eventEnd } = rowData
    const isActive = isWithinRange(currentTime, eventStart, eventEnd)

    if (rowData.type === 'talk') {
      return (
        <Talk
          name={rowData.name}
          avatarURL={`https://infinite.red/images/chainreact/${rowData.image}.png`}
          title={rowData.title}
          start={eventStart}
          duration={eventDuration}
          onPress={() => this.onEventPress(rowData)}
          currentTime={currentTime}
          isCurrentDay={isCurrentDay}
          isActive={isActive}
        />
      )
    } else {
      return (
        <Break
          type={rowData.type}
          start={eventStart}
          duration={eventDuration}
          onPress={() => this.onEventPress(rowData)}
          currentTime={currentTime}
          isCurrentDay={isCurrentDay}
          isActive={isActive}
        />
      )
    }
  }

  componentWillReceiveProps (newProps) {
    const { activeDay, eventsByDay, dataSource } = this.state

    // Update currentTime before updating dataSource
    if (newProps.currentTime) {
      this.setState({
        currentTime: newProps.currentTime
      }, () => {
        this.setState({
          dataSource: dataSource.cloneWithRows(eventsByDay[activeDay].slice()),
          isCurrentDay: isCurrentDay(newProps.currentTime, activeDay)
        })
      })
    }
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  setActiveDay (day) {
    const { eventsByDay, dataSource } = this.state
    const { currentTime } = this.props
    this.setState(() => ({
      dataSource: dataSource.cloneWithRows(eventsByDay[day]),
      activeDay: day,
      isCurrentDay: isCurrentDay(currentTime, day)
    }))
  }

  renderDayToggle () {
    const { activeDay } = this.state
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.0, 0.38, 1.0]}
        colors={['#46114E', '#521655', '#571757']}
        style={styles.headerGradient}>
        <View style={styles.dayToggle}>
          <TouchableOpacity onPress={() => this.setActiveDay(0)}>
            <Text
              style={activeDay === 0 ? styles.activeDay : styles.inactiveDay}>
              Monday July, 17th
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setActiveDay(1)}>
            <Text
              style={activeDay === 1 ? styles.activeDay : styles.inactiveDay}>
              Tuesday July, 18th
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    )
  }

  render () {
    return (
      <PurpleGradient style={styles.linearGradient}>
        {this.renderDayToggle()}
        {this.state.isCurrentDay && <View style={styles.timeline} />}
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          onLayout={this.onLayout}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </PurpleGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentTime: new Date(state.schedule.currentTime)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedEvent: (data) => dispatch(ScheduleActions.setSelectedEvent(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen)
