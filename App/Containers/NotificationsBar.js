import React, { Component } from 'react'
import StatusBarAlert from 'react-native-statusbar-alert'

class NotificationsBar extends Component {
  onPress = () => {
    // this.navigator.push({id: 'SilentAlert'})
    console.tron.log('I am supposed to open a new screen now!')
  }

  render() {
    const notifications = this.props.notifications

    if (notifications.length === 0) {
      return null
    }

    return (
      <StatusBarAlert
        visible
        message="Talk coming up! (tap for details)"
        backgroundColor="#3CC29E"
        color="white"
        pulse="background"
        onPress={this.onPress}
      />
    )
  }
}

export default NotificationsBar
