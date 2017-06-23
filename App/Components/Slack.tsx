import React from 'react'
import { Text, Image, Linking } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import RoundedButton from './RoundedButton'
import { Images } from '../Themes'
import styles from './Styles/SlackStyles'

const Slack = (props) => {
  const gradient = ['#136EB5', 'rgba(1,192,182,0.88)']

  return (
    <LinearGradient
      colors={gradient}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={styles.slack}>
      <Image style={styles.slackIcon} source={Images.slack} />
      <Text style={styles.heading}>Join Us On Slack</Text>
      <RoundedButton
        text='Join the IR Slack Community'
        onPress={() => Linking.openURL('http://community.infinite.red')}
        style={styles.slackButton}
      />
    </LinearGradient>
  )
}

export default Slack
