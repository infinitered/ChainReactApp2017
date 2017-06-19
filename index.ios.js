import './App/Config/ReactotronConfig'
import { AppRegistry, AsyncStorage } from 'react-native'
import App from './App/Containers/App'

AsyncStorage.setItem('activeDay', '0')

AppRegistry.registerComponent('ChainReactApp', () => App)
