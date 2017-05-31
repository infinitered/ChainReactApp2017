import React, { Component } from 'react'
import StatusBarAlert from 'react-native-statusbar-alert'

class NotificationsBar extends Component {

  render() {
    return (
      <StatusBarAlert
        visible={true}
        message="Remember the session!"
        backgroundColor="#3CC29E"
        color="white"
        pulse="background"
      />
    )
  }
}

export default NotificationsBar
