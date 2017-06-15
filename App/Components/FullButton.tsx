import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/FullButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Example
ExamplesRegistry.addComponentExample('Full Button', () =>
  <FullButton
    text='Hey there'
    onPress={() => window.alert('Full Button Pressed!')}
  />
)

interface FullButtonProps {
  text: string
  styles?: StyleSheet
  onPress (): void
}

const FullButton = (props: FullButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, props.styles]} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

export default FullButton
