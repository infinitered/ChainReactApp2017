import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import RemindMeButton from './RemindMeButton'
import styles from './Styles/TalkInfoStyle'

export default class TalkInfo extends Component {

  render () {
    return (
      <View style={styles.container}>
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
          onPress={this.props.toggleRemindMe}
          on={this.props.remindMe}
        />
      </View>
    )
  }
}

TalkInfo.propTypes = {
  start: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  remindMe: PropTypes.bool.isRequired,
  toggleRemindMe: PropTypes.func.isRequired
}

TalkInfo.defaultProps = {
  remindMe: false
}
