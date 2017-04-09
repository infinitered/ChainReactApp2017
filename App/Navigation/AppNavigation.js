import { StackNavigator, TabNavigator } from 'react-navigation'
import TalksScreen from '../Containers/TalksScreen'
import TalkDetailScreen from '../Containers/TalkDetailScreen'
import LocationScreen from '../Containers/LocationScreen'
import AboutScreen from '../Containers/AboutScreen'
import styles from './Styles/NavigationStyles'

const ScheduleStack = StackNavigator({
  Home: { screen: TalksScreen },
  TalkDetail: { screen: TalkDetailScreen }
}, {
  headerMode: 'none',
  initialRouteName: 'Home',
  cardStyle: styles.card
})

const TabNav = TabNavigator({
  Schedule: { screen: ScheduleStack },
  Location: { screen: LocationScreen },
  About: { screen: AboutScreen }
}, {
  headerMode: 'none',
  initialRouteName: 'Schedule',
  tabBarOptions: {
    style: styles.header,
    activeTintColor: 'white',
    inactiveTintColor: 'white'
  }
})

export default TabNav
