import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import RemindMeButton from './RemindMeButton'
import SocialMediaButton from './SocialMediaButton'
import { format } from 'date-fns'
import styles from './Styles/TalkInfoStyle'

const TalkInfo = props => {
  const { start, duration, remindMe, toggleRemindMe, isFinished, showWhenFinished } = props
  const formattedStart = format(start, 'h:mmA')
  const showRemindMe = !isFinished
  const showSocialMedia = isFinished && showWhenFinished

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
      {showRemindMe &&
        <View style={styles.remindMe}>
          <RemindMeButton onPress={toggleRemindMe} on={remindMe} />
        </View>
      }
      {showSocialMedia &&
        <View style={styles.socialButtons}>
          <SocialMediaButton network='twitter' onPress={props.onPressTwitter} />
          <SocialMediaButton network='github' onPress={props.onPressGithub} />
        </View>
      }
    </View>
  )
}

TalkInfo.propTypes = {
  start: PropTypes.instanceOf(Date).isRequired,
  duration: PropTypes.number.isRequired,
  remindMe: PropTypes.bool.isRequired,
  toggleRemindMe: PropTypes.func.isRequired,
  isFinished: PropTypes.bool.isRequired,
  showWhenFinished: PropTypes.bool.isRequired,
  onPressGithub: PropTypes.func,
  onPressTwitter: PropTypes.func
}

TalkInfo.defaultProps = {
  remindMe: false,
  isFinished: false
}

export default TalkInfo
