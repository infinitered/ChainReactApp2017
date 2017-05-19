import { call, put, fork } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import ScheduleActions from '../Redux/ScheduleRedux'
import DebugConfig from '../Config/DebugConfig'

const updateDelay = 5000

const getCurrentTime = () => {
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

export function* trackCurrentTime () {
  let time = yield getCurrentTime()
  yield put(ScheduleActions.updateCurrentTime(time))
  while (true) {
    yield call(delay, updateDelay)
    time = yield getCurrentTime()
    yield put(ScheduleActions.updateCurrentTime(time))
  }
}
