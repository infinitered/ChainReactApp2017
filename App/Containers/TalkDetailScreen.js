import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import PurpleGradient from '../Components/PurpleGradient'
import TalkInfo from '../Components/TalkInfo'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
import styles from './Styles/TalkDetailScreenStyle'

class TalkDetail extends React.Component {

  static navigationOptions = {
    tabBar: {
      label: 'Schedule',
      icon: ({ focused }) => (
        <Image source={focused ? Images.activeScheduleIcon : Images.inactiveScheduleIcon} />
      )
    }
  }

  render () {
    return (
      <PurpleGradient style={[styles.linearGradient, {flex: 1}]}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.cardShadow1} />
            <View style={styles.cardShadow2} />
            <View style={styles.card}>
              <Text>Talk Details Will Go Here</Text>
            </View>
            <TalkInfo
              start={this.props.start}
              duration={this.props.duration}
              remindMe={false}
              toggleRemindMe={() => {}}
            />
          </View>
        </ScrollView>
      </PurpleGradient>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkDetail)
