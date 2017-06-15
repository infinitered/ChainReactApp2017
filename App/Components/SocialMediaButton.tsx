import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import styles from './Styles/SocialMediaButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Images } from '../Themes'

// Example
ExamplesRegistry.addComponentExample('SocialMediaButton', () =>
  <SocialMediaButton
    network='twitter'
    onPress={() => window.alert('Lets Get Social AF')}
  />
)

interface SocialMediaButtonProps {
  style?: StyleSheet
  network: 'twitter' | 'github'
  spacing?: 'left' | 'right'
  onPress (): void
}

const SocialMediaButton = (props: SocialMediaButtonProps) => {
  const { network, style, spacing, onPress } = props
  const imageSource = network === 'twitter' ? Images.twitterIcon : Images.githubIcon
  const spacingShim = spacing === 'right' ? 'right' : 'left'

  return (
    <TouchableOpacity
      style={[styles[spacingShim], style]}
      onPress={onPress}
      hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
    >
      <Image source={imageSource} />
    </TouchableOpacity>
  )
}

export default SocialMediaButton
