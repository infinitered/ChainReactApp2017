import { call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import ScheduleActions from '../Redux/ScheduleRedux'

// 15 minutes
const updateDelay = 15 * 60 * 1000

export function* getScheduleUpdates (api, action) {
  let response = yield call(api.getSpeakers)
  if (response.ok) yield put(ScheduleActions.updateSpeakerSchedule(response.data.schedule))
  // and every updateDelay after
  while (true) {
    yield call(delay, updateDelay)
    response = yield call(api.getSpeakers)
    if (response.ok) yield put(ScheduleActions.updateSpeakerSchedule(response.data.schedule))
  }
}
