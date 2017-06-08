import React, { PropTypes } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import styles from './Styles/SocialMediaButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Images } from '../Themes'

// Example
ExamplesRegistry.addComponentExample('SocialMediaButton', () =>
  <SocialMediaButton
    text='Tweeter'
    onPress={() => window.alert('Lets Get Social AF')}
  />
)

const SocialMediaButton = props => {
  const { network, style, spacing, onPress } = props
  const imageSource = network === 'twitter' ? Images.twitterIcon : Images.githubIcon
  const spacingShim = spacing === 'right' ? 'right' : 'left'

  return (
    <TouchableOpacity
      style={[styles.button, styles[spacingShim], style]}
      onPress={onPress}
      hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
    >
      <Image source={imageSource} />
    </TouchableOpacity>
  )
}

SocialMediaButton.propTypes = {
  onPress: PropTypes.func,
  style: View.propTypes.style,
  network: PropTypes.string.isRequired,
  spacing: PropTypes.string
}

SocialMediaButton.defaultProps = {
  spacing: 'left'
}

export default SocialMediaButton
