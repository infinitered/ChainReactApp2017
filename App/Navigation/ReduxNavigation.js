import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
import { BackHandler } from 'react-native'

const handleHardwareBack = (props, navigation) => () => {
  // Back performs pop, unless we're to main screen [0,0]
  if (navigation.state.index === 0 && navigation.state.routes[0].index === 0) {
    BackHandler.exitApp()
  }
  return navigation.goBack(null)
}

// here is our redux-aware our smart component
const ReduxNavigation = (props) => {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

  // Android back button
  BackHandler.addEventListener('hardwareBackPress', handleHardwareBack(props, navigation))

  return <AppNavigation navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
