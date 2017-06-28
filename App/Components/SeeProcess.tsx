import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import RoundedButton from './RoundedButton'
import { Images } from '../Themes'
import styles from './Styles/SeeProcessStyles'

const SeeProcess = (props) => {
  const onClick = () => {
    console.log("test")
  }

  return (
    <TouchableOpacity style={styles.processContainer} onPress={() => Linking.openURL("http://google.com")}>
      <View style={styles.leftContainer}>
        <Image style={styles.starsIcon} source={Images.starsIcon} />
        <Text style={styles.text}>See the process behind making our app</Text>
      </View>
      <Image style={styles.rightArrow} source={Images.whiteArrowIcon} />
    </TouchableOpacity>
  )
}

export default SeeProcess
