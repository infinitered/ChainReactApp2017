import Config from '../Config/DebugConfig'
import Immutable from 'seamless-immutable'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

  // https://github.com/infinitered/reactotron for more options!
Reactotron
  .configure({ name: 'Chain React App' })
  .useReactNative()
  .use(reduxPlugin({ onRestore: Immutable }))
  // register the redux-saga plugin so we can use the monitor in CreateStore.js
  .use(sagaPlugin())

if (Config.useReactotron) {
  // let's connect!
  Reactotron.connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
}

console.tron = Reactotron
