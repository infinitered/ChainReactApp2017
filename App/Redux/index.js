import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import AppNavigation from '../Navigation/AppNavigation'

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: navReducer,
    schedule: require('./ScheduleRedux').reducer,
    location: require('./LocationRedux').reducer,
    notifications: require('./NotificationRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
