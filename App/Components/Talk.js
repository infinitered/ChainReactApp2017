import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import TalkInfo from './TalkInfo'
import styles from './Styles/TalkStyle'

export default class Talk extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      sendReminder: false
    }
  }

  toggleReminder () {
    this.setState((prevProps) => ({sendReminder: !prevProps.sendReminder}))
  }

  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.info}>
          <View style={styles.infoText}>
            <Text style={styles.name}>
              {this.props.name}
            </Text>
            <Text style={styles.title}>
              {this.props.title}
            </Text>
          </View>
          <Image
            style={styles.avatar}
            source={{uri: this.props.avatarURL}}
          />
        </View>
        <TalkInfo
          start={this.props.start}
          duration={this.props.duration}
          remindMe={this.state.sendReminder}
          toggleRemindMe={() => this.toggleReminder()}
        />
      </TouchableOpacity>
    )
  }

}

Talk.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}
