import React from 'react'
import {
  TouchableOpacity,
  Image,
  Linking,
  ImageStyle
} from 'react-native'
import styles from './Styles/SponsorsStyles'

interface SponsorProps {
  url: string
  image: string
  isLow?: boolean
}

const Sponsor = (props: SponsorProps) => {
  const imageStyle = props.isLow ? styles.lowTier : {}

  return (
    <TouchableOpacity
      style={styles.sponsor}
      onPress={() => Linking.openURL(props.url)}>
      <Image style={imageStyle} source={props.image} />
    </TouchableOpacity>
  )
}

export default Sponsor
