import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import RemindMeButton from './RemindMeButton'
import styles from './Styles/TalkStyle'
// import PushNotification from 'react-native-push-notification'

export default class Talk extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      sendReminder: false
    }
  }

  toggleReminder () {
    this.setState((prevProps) => ({sendReminder: !prevProps.sendReminder}))
    // PushNotification.localNotification({message: 'Hello dude!'})
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
        <View style={styles.moreInfo}>
          <View style={styles.details}>
            <View style={styles.detail}>
              <Text style={styles.detailLabel}>
                Start
              </Text>
              <Text style={styles.detailText}>
                {this.props.start}
              </Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailLabel}>
                Duration
              </Text>
              <Text style={styles.detailText}>
                {this.props.duration}
              </Text>
            </View>
          </View>
          <RemindMeButton
            onPress={() => this.toggleReminder()}
            on={this.state.sendReminder}
          />
        </View>
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
