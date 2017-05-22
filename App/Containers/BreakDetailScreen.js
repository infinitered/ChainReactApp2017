import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import PurpleGradient from '../Components/PurpleGradient'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
import styles from './Styles/BreakDetailScreenStyle'

class BreakDetail extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeScheduleIcon : Images.inactiveScheduleIcon} />
    )
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
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
            <View style={styles.card}>
              <View style={styles.mainImageContainer}>
                <Image style={styles.mainImage} source={Images.lunch} />
                <View style={styles.mainHeadingContainer}>
                  <Text style={styles.breakHeading}>
                    {this.props.type.toUpperCase()} BREAK
                  </Text>
                  <Text style={styles.breakDuration}>
                    12:00 - 1:00<Text style={styles.meridiem}>PM</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.content}>
                <Text style={styles.heading}>
                  Lunch Options
                </Text>
                <Text style={styles.description}>
                  {`\u2022  Green Eggs & Ham On Rye\n`}
                  {`\u2022  Green Eggs & Ham On Rye\n`}
                  {`\u2022  Green Eggs & Ham On Rye\n`}
                  {`\u2022  Green Eggs & Ham On Rye\n`}
                  {`\u2022  Green Eggs & Ham On Rye\n`}
                  {`\u2022  Green Eggs & Ham On Rye`}
                </Text>
                <Text style={styles.heading}>
                  Vegan Options
                </Text>
                <Text style={styles.description}>
                  {`\u2022  Tap Water\n`}
                  {`\u2022  Assorted Leaves`}
                </Text>
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
