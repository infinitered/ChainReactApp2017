import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import PurpleGradient from '../Components/PurpleGradient'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { format, addMinutes } from 'date-fns'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
import styles from './Styles/BreakDetailScreenStyle'
import {compose, join, over, lensIndex, toUpper} from 'ramda'

const toTitle = compose(
  join(''),
  over(lensIndex(0), toUpper)
)

class BreakDetail extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeScheduleIcon : Images.inactiveScheduleIcon} />
    )
  }

  constructor (props) {
    super(props)

    this.state = {
      imageWidth: 315
    }
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  onCardLayout = (event) => {
    const width = event.nativeEvent.layout.width

    this.setState({
      imageWidth: width - 20
    })
  }

  renderMainImage = () => {
    const { type, duration, eventStart, title } = this.props
    const mainImage = Images[`${type}Big`] || Images.lunchBig
    const cellTitle = title || `${type.charAt(0).toUpperCase() + type.slice(1)} Break`
    const eventDuration = Number(duration)
    const prettyStartTime = format(eventStart, 'h:mm')
    const endTime = addMinutes(eventStart, eventDuration)
    const prettyEndTime = format(endTime, 'h:mm')
    const meridiem = format(endTime, 'A')

    return (
      <View style={styles.mainImageContainer}>
        <Image style={[styles.mainImage, { width: this.state.imageWidth }]} source={mainImage} />
        <View style={styles.mainHeadingContainer}>
          <Text style={styles.breakHeading}>
            {cellTitle}
          </Text>
          <Text style={styles.breakDuration}>
            <Text>{prettyStartTime} - {prettyEndTime}</Text><Text style={styles.meridiem}>{meridiem}</Text>
          </Text>
        </View>
      </View>
    )
  }

  renderOption = (option, index) => {
    return (
      <Text key={index} style={styles.description}>{`\u2022  ${option}`}</Text>
    )
  }

  renderOptions = (options) => {
    return (
      <View style={styles.descriptionContainer}>
        {options.map((option, index) => this.renderOption(option, index))}
      </View>
    )
  }

  renderVeganOptions = (options) => {
    if (options.length > 0) {
      return (
        <View>
          <Text style={styles.heading}>
            Vegan Options
          </Text>
          <View style={styles.descriptionContainer}>
            {this.renderOptions(options)}
          </View>
        </View>
      )
    }
  }

  render () {
    const { options, veganOptions } = this.props

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
            <View style={styles.card} onLayout={this.onCardLayout}>
              {this.renderMainImage()}
              <View style={styles.content}>
                <Text style={styles.heading}>
                  {toTitle(this.props.type)} Options
                </Text>
                <View style={styles.descriptionContainer}>
                  {this.renderOptions(options)}
                </View>
                {this.renderVeganOptions(veganOptions)}
              </View>
            </View>
          </View>
        </ScrollView>
      </PurpleGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.schedule.selectedEvent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreakDetail)
