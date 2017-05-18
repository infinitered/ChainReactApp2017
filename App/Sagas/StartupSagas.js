import { put } from 'redux-saga/effects'
import ScheduleActions from '../Redux/ScheduleRedux'

// process STARTUP actions
export function * startup (action) {
  yield put(ScheduleActions.trackCurrentTime()),
  yield put(ScheduleActions.getScheduleUpdates())
}
