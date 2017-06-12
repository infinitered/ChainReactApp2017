import { call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import ScheduleActions from '../Redux/ScheduleRedux'
import DebugConfig from '../Config/DebugConfig'
import Config from '../Config/AppConfig'

const updateDelay = 5000

const getCurrentTime = () => {
  let date = new Date()
  if (DebugConfig.hotwireDate) {
    const firstDay = new Date(Config.conferenceDates[0])
    date.setFullYear(firstDay.getFullYear())
    date.setMonth(firstDay.getMonth())
    date.setDate(firstDay.getDate())
    return date
  } else {
    return date
  }
}

export function * trackCurrentTime () {
  let time = yield getCurrentTime()
  yield put(ScheduleActions.updateCurrentTime(time))
  while (true) {
    yield call(delay, updateDelay)
    time = yield getCurrentTime()
    yield put(ScheduleActions.updateCurrentTime(time))
  }
}
