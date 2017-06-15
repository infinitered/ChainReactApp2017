import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import NotificationActions from '../Redux/NotificationRedux'
import ReduxPersist from '../Config/ReduxPersist'
import NotificationsBar from '../Components/NotificationsBar'
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
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
  notifications: state.notifications.notifications
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  clearNotifications: () => dispatch(NotificationActions.clearNotifications())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
