import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Callout } from 'react-native-maps'
import Styles from './Styles/VenueMapCalloutStyles'

export default (props) => {
  const { location, onPress } = props
  return (
    <Callout style={Styles.callout}>
      <TouchableOpacity onPress={onPress}>
        <Text>{location.title}</Text>
      </TouchableOpacity>
    </Callout>
  )
}
