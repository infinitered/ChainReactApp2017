import { StackNavigator, TabNavigator } from 'react-navigation'
import TalksScreen from '../Containers/TalksScreen'
import LocationScreen from '../Containers/LocationScreen'
import AboutScreen from '../Containers/AboutScreen'
// import LaunchScreen from '../Containers/LaunchScreen'
// import LoginScreen from '../Containers/LoginScreen'

import styles from './Styles/NavigationStyles'

const MainNav = TabNavigator({
  Talks: { screen: TalksScreen },
  Location: { screen: LocationScreen },
  About: { screen: AboutScreen }
}, {
  initialRouteName: 'Talks',
  tabBarOptions: {
    style: styles.header,
    activeTintColor: 'white',
    inactiveTintColor: 'rgba(255,255,255,0.69)'
  }
})
// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Home: { screen: MainNav }
  // LaunchScreen: { screen: LaunchScreen },
  // LoginScreen: {
  //   screen: LoginScreen,
  //   navigationOptions: { title: 'Login' }
  // }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Home'
})

export default PrimaryNav
