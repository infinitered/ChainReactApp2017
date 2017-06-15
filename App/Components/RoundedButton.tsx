import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RoundedButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Example
ExamplesRegistry.addComponentExample('Rounded Button', () =>
  <RoundedButton
    text='real buttons have curves'
    onPress={() => window.alert('Rounded Button Pressed!')}
  />
)

interface RoundedButtonProps {
  text: string
  navigator?: Navigator
  style?: StyleSheet
  children?: string | Object
  onPress (): void
}

const RoundedButton = (props: RoundedButtonProps) => {
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

export default RoundedButton
