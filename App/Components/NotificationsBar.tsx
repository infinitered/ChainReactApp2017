import React, { Component } from 'react'
import { View, Modal, Text, TouchableOpacity } from 'react-native'
import StatusBarAlert from 'react-native-statusbar-alert'
import styles from './Styles/ModalStyle'
import { BlurView } from 'react-native-blur'

const NotificationScreen = ({notifications, onDismissModal}) => {
  const notificationItems = notifications.map((message) => (
    <Text style={styles.description} key={message}>
      {message}
    </Text>
  ))

  return (
    <View style={{flex: 1}}>
      {
        /* This is outside View due to limitations in android blur */
      }
      <BlurView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}
        blurType='dark'
        blurAmount={15}
      />

      <View style={styles.colorBump}>
        <View style={styles.section}>
          <Text style={styles.heading}>Sessions Starting!</Text>
          {notificationItems}
        </View>
        <TouchableOpacity onPress={onDismissModal} style={styles.button}>
          <Text style={styles.text}>
            Close Message
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

interface NotificationsBarProps {
  notifications: string[]
  clearNotifications (): void
}

interface NotificationsBarState {
  showModal: boolean
}

class NotificationsBar extends Component<NotificationsBarProps, NotificationsBarState> {

  constructor (props) {
    super(props)
    this.state = { showModal: false }
  }

  onPressStatusBarAlert = () => {
    this.setState({ showModal: true })
  }

  onDismissModal = () => {
    this.setState({ showModal: false })
    this.props.clearNotifications()
  }

  render () {
    const {notifications} = this.props

    if (notifications.length === 0) {
      return null
    }

    return (
      <View>
        <StatusBarAlert
          visible
          message='Talk coming up! (tap for details)'
          backgroundColor='#a843af'
          color='white'
          pulse='background'
          onPress={this.onPressStatusBarAlert}
        />
        <Modal
          transparent
          animationType={'slide'}
          visible={this.state.showModal}
          onRequestClose={this.onDismissModal}>
          <NotificationScreen
            onDismissModal={this.onDismissModal}
            notifications={notifications}
          />
        </Modal>
      </View>
    )
  }
}

export default NotificationsBar
