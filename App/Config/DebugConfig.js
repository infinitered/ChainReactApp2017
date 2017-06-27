export default {
  showDevScreens: __DEV__,
  useFixtures: false,
  yellowBox: __DEV__,
  includeExamples: __DEV__,
  useReactotron: __DEV__,
  codepushStaging: false,
  hotwireDate: __DEV__,     // force today to be the day of the conf
  hotwirePush: __DEV__,     // force push notifications to happen in 5 seconds
  getAPI: false             // should app hit API server for data? (Turn off if we're using codepush)
}
