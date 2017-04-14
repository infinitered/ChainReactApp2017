import { call, put, fork } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import ScheduleActions from '../Redux/ScheduleRedux'
import DebugConfig from '../Config/DebugConfig'

function getCurrentTime () {
  let date = new Date()
  if (DebugConfig.hotwireDate) {
    date.setFullYear(2017)
    date.setMonth(6)
    date.setDate(17)
    return date
  } else {
    return date
  }
}

function* handleUpdate (time) {
  yield put(ScheduleActions.updateCurrentTime(time))
}

export function* trackCurrentTime () {
  let time = yield getCurrentTime()
  yield fork(handleUpdate, time)
  while (true) {
    yield call(delay, 1000)
    time = yield getCurrentTime()
    yield fork(handleUpdate, time)
  }
}
