import React from 'react'
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
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
              <Text style={styles.heading}>
                {this.props.name}
              </Text>
              <Text style={styles.description}>
                {this.props.bio}
              </Text>
              <View style={styles.social}>
                <SocialMediaButton
                  network='twitter'
                  spacing='right'
                  onPress={() => this.props.onPressTwitter(this.props.twitter)}
                />
                <SocialMediaButton
                  network='github'
                  spacing='right'
                  onPress={() => this.props.onPressGithub(this.props.github)}
                />
              </View>
            </View>
            <TalkInfo
              start={new Date(this.props.eventStart)}
              duration={Number(this.props.duration)}
              remindMe={false}
              toggleRemindMe={() => {}}
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
    currentTime: new Date(state.schedule.currentTime)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPressGithub: url => dispatch(ScheduleActions.visitGithub(url)),
    onPressTwitter: url => dispatch(ScheduleActions.visitTwitter(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkDetail)
