import React, { Component, PropTypes } from 'react'
import { View, Modal, Text, TouchableOpacity } from 'react-native'
import StatusBarAlert from 'react-native-statusbar-alert'
import styles from './Styles/ModalStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { BlurView } from 'react-native-blur'

const NotificationScreen = ({notifications, onDismissModal}) => {
  const notificationItems = notifications.map((message) => (
    <Text style={styles.description} key={message}>
      {message}
    </Text>
  ))

  return (

    <BlurView
      style={{flex: 1}}
      blurType='dark'
      blurAmount={15}
    >
      <View style={styles.colorBump}>
        <View style={styles.section}>
          <Text style={styles.heading}>Sessions Starting!</Text>
          {notificationItems}
        </View>
        <TouchableOpacity onPress={onDismissModal}>
          <View style={styles.button}>
            <Icon name='times-circle' size={20} style={styles.closeIcon} />
            <Text style={styles.text}>
              Dismiss
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </BlurView>
  )
}

class NotificationsBar extends Component {
  static propTypes = {
    notifications: PropTypes.array.isRequired,
    clearNotifications: PropTypes.func.isRequired
  }

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
