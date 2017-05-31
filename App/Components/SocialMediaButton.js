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

export default class SocialMediaButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    style: View.propTypes.style,
    network: PropTypes.string.isRequired,
    spacing: PropTypes.string
  }
  static defaultProps = {
    spacing: 'left'
  }

  render () {
    const { network, style } = this.props
    const imageSource = network === 'twitter' ? Images.twitterIcon : Images.githubIcon
    const spacing = this.props.spacing === 'right' ? 'right' : 'left'
    return (
      <TouchableOpacity
        style={[styles.button, styles[spacing], style]}
        onPress={this.props.onPress}
        hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
      >
        <Image source={imageSource} />
      </TouchableOpacity>
    )
  }
}
