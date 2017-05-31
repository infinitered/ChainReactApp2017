import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import Navigation from '../Navigation/AppNavigation'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import NotificationsBar from './NotificationsBar'
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {

  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    const { dispatch, nav, notifications } = this.props

    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <NotificationsBar notifications={notifications} />
        <Navigation
          addNavigationHelpers={addNavigationHelpers({dispatch, state: nav})}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notifications,
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
