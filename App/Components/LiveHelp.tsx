import React from 'react'
import { View, Text, Linking } from 'react-native'
import RoundedButton from './RoundedButton'
import styles from './Styles/LiveHelpStyles'

const LiveHelp = (props) => {
  return (
    <View style={styles.liveHelp}>
      <Text style={styles.liveHelpPhone}>
        (360) 562-0450
      </Text>
      <Text style={styles.liveHelpText}>
        Text or call us at anytime for directions, suspicious activity,
        violations of our <Text style={styles.link} onPress={() => Linking.openURL('http://confcodeofconduct.com')}>Code of Conduct</Text>, or any other concern.
      </Text>
      <RoundedButton
        text='Send Text Message (SMS)'
        onPress={() => Linking.openURL('sms:3605620450')}
        style={styles.liveHelpButton}
      />
      <RoundedButton
        text='Give Us A Call'
        onPress={() => Linking.openURL('tel:3605620450')}
        style={styles.liveHelpButton}
      />
    </View>
  )
}

export default LiveHelp
