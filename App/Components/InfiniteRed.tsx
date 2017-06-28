import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import RoundedButton from './RoundedButton'
import { Images } from '../Themes'
import styles from './Styles/InfiniteRedStyles'

const InfiniteRed = (props) => {
  const gradient = ['#351F41', '#8E2044']

  return (
    <LinearGradient
      colors={gradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.infiniteRed}>
      <Text style={styles.heading}>Brought to you by:</Text>
      <Image style={styles.infiniteRedIcon} source={Images.infiniteRed} />
      <View style={styles.line} />
      <Text style={styles.subheading}>Keep the conversation going by{'\n'}connecting with Infinite Red on Slack</Text>
      <RoundedButton
        text='Connect with IR on Slack'
        onPress={() => Linking.openURL('http://community.infinite.red')}
        style={styles.slackButton}
      />
    </LinearGradient>
  )
}

export default InfiniteRed
