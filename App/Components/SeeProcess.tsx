import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import RoundedButton from './RoundedButton'
import { Images } from '../Themes'
import styles from './Styles/SeeProcessStyles'

const SeeProcess = (props) => {
  return (
    <TouchableOpacity style={styles.processContainer} onPress={() => Linking.openURL('https://shift.infinite.red/making-the-react-native-conference-app-in-react-native-9afd36be3681')}>
      <View style={styles.leftContainer}>
        <Image style={styles.starsIcon} source={Images.starsIcon} />
        <Text style={styles.text}>See the process behind making our app</Text>
      </View>
      <Image style={styles.rightArrow} source={Images.whiteArrowIcon} />
    </TouchableOpacity>
  )
}

export default SeeProcess
