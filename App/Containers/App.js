import '../Config'
import PushConfig from '../Config/PushConfig'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import SplashScreen from 'react-native-smart-splash-screen'

// create our store
const store = createStore()

// Configure push notifications, passing store's dispatch
PushConfig.configure(store.dispatch)

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  componentDidMount () {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500
    })
  }

  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
