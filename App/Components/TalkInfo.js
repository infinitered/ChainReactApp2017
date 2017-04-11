import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import RemindMeButton from './RemindMeButton'
import { format } from 'date-fns'
import styles from './Styles/TalkInfoStyle'

export default class TalkInfo extends Component {

  render () {
    const { start, duration, remindMe, toggleRemindMe } = this.props
    const formattedStart = format(start, 'h:mmA')

    return (
      <View style={styles.container}>
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.detailLabel}>
              Start
            </Text>
            <Text style={styles.detailText}>
              {formattedStart}
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailLabel}>
              Duration
            </Text>
            <Text style={styles.detailText}>
              {`${duration} Minutes`}
            </Text>
          </View>
        </View>
        <RemindMeButton onPress={toggleRemindMe} on={remindMe} />
      </View>
    )
  }
}

TalkInfo.propTypes = {
  start: PropTypes.instanceOf(Date).isRequired,
  duration: PropTypes.number.isRequired,
  remindMe: PropTypes.bool.isRequired,
  toggleRemindMe: PropTypes.func.isRequired
}

TalkInfo.defaultProps = {
  remindMe: false
}
