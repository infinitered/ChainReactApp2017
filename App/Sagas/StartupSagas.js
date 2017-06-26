import { put } from 'redux-saga/effects'
import ScheduleActions from '../Redux/ScheduleRedux'
// import LocationActions from '../Redux/LocationRedux'

// process STARTUP actions
export function * startup (action) {
  yield put(ScheduleActions.trackCurrentTime())
  /* ********************************************************
  * Readonly API Calls are better handled through code push *
  * *********************************************************/
  // yield put(ScheduleActions.getScheduleUpdates())
  // yield put(LocationActions.getNearbyUpdates())
}
