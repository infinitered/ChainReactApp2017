import { call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import LocationActions from '../Redux/LocationRedux'

// 15 minutes
const updateDelay = 15 * 60 * 1000

export function* getNearbyUpdates (api, action) {
  let response = yield call(api.getNearby)
  if (response.ok) yield put(LocationActions.updateNearby(response.data))
  // and every updateDelay after
  while (true) {
    yield call(delay, updateDelay)
    response = yield call(api.getNearby)
    if (response.ok) yield put(LocationActions.updateNearby(response.data))
  }
}
