import React, { PropTypes } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './Styles/RoundedButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Example
ExamplesRegistry.addComponentExample('Rounded Button', () =>
  <RoundedButton
    text='real buttons have curves'
    onPress={() => window.alert('Rounded Button Pressed!')}
  />
)

const RoundedButton = props => {
  const getText = () => {
    return props.text || props.children || ''
  }

  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{getText()}</Text>
    </TouchableOpacity>
  )
}

RoundedButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  navigator: PropTypes.object,
  style: View.propTypes.style
}

export default RoundedButton
