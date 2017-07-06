import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import NotificationActions from '../Redux/NotificationRedux'
import ReduxPersist from '../Config/ReduxPersist'
import NotificationsBar from '../Components/NotificationsBar'
import styles from './Styles/RootContainerStyles'
import Sound from 'react-native-sound'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
    this.coffee = new Sound('coffee.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
      }
    })
  }

  componentWillReceiveProps (newProps) {
    if (newProps.playSound) {
      this.coffee.play((success) => {
        if (success) {
          this.props.clearSound()
        }
      }).setVolume(0.5)
    }
  }

  render () {
    const {
      notifications, clearNotifications
    } = this.props

    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <NotificationsBar
          notifications={notifications}
          clearNotifications={clearNotifications}
        />
        <ReduxNavigation />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notifications.notifications,
  playSound: state.notifications.playSound.play
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  clearNotifications: () => dispatch(NotificationActions.clearNotifications()),
  clearSound: () => dispatch(NotificationActions.playSound({play: false}))
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
