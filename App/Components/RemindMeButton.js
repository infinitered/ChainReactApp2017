import React, { PropTypes, Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/RemindMeButtonStyle'

export default class RemindMeButton extends Component {

  render () {
    const { on } = this.props
    const icon = on ? Images.activeNotificationIcon : Images.inactiveNotificationIcon
    const buttonText = on ? 'Turn Off' : 'Remind Me'
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[styles.button, on && styles.activeButton]}>
          <Image source={icon} style={styles.icon} />
          <Text style={[styles.text, on && styles.activeText]}>
            {buttonText}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

}

RemindMeButton.propTypes = {
  on: PropTypes.bool.isRequired,
  onPress: PropTypes.func
}

RemindMeButton.defaultProps = {
  on: false
}
