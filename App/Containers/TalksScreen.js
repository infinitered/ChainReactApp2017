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
import { connect } from 'react-redux'
import dateFns from 'date-fns'
import { groupWith } from 'ramda'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import { Images } from '../Themes'
import styles from './Styles/TalksScreenStyle'

class TalkScreen extends React.Component {

  constructor (props) {
    super(props)

    const { schedule } = require('../Fixtures/talks.json')
    const sorted = schedule.sort((a, b) => {
      return dateFns.compareAsc(new Date(a.talkTime), new Date(b.talkTime))
    })
    const talksByDay = groupWith((a, b) => dateFns.isSameDay(new Date(a.talkTime), new Date(b.talkTime)), sorted)

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      talksByDay: talksByDay,
      dataSource: ds.cloneWithRows(talksByDay[0]),
      activeDay: 0
    }
  }

  static navigationOptions = {
    tabBar: {
      label: 'Schedule',
      icon: ({ focused }) => (
        <Image source={focused ? Images.activeScheduleIcon : Images.inactiveScheduleIcon} />
      )
    }
  }

  renderRow = (rowData, sectionID) => {
    // You can condition on sectionID (key as string), for different cells
    // in different sections
    const formattedTime = dateFns.format(new Date(rowData.talkTime), 'h:mmA')
    return (
      <Talk
        key={sectionID}
        name={rowData.name}
        avatarURL={`https://infinite.red/images/chainreact/${rowData.image}.png`}
        title={rowData.talkTitle}
        start={formattedTime}
        duration={`${rowData.talkDuration} Minutes`}
        onPress={() => this.props.navigation.navigate('TalkDetail', rowData)}
      />
    )
  }

  /* ***********************************************************
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRowsAndSections` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  setActiveDay (day) {
    this.setState(() => ({
      dataSource: this.state.dataSource.cloneWithRows(this.state.talksByDay[day]),
      activeDay: day
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
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          onLayout={this.onLayout}
          renderRow={this.renderRow}
          enableEmptySections
        />
        <View style={styles.timeline} />
      </PurpleGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkScreen)
