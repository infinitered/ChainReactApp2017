import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Callout } from 'react-native-maps'
import Styles from './Styles/VenueMapCalloutStyles'

export default class VenueMapCallout extends React.Component {
  constructor (props) {
    super(props)
    this.onPress = this.props.onPress.bind(this, this.props.location)
  }

  render () {
    /* ***********************************************************
    * Customize the appearance of the callout that opens when the user interacts with a marker.
    * Note: if you don't want your callout surrounded by the default tooltip, pass `tooltip={true}` to `Callout`
    *************************************************************/
    const { location } = this.props
    return (
      <Callout style={Styles.callout}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>{location.title}</Text>
        </TouchableOpacity>
      </Callout>
    )
  }
}
