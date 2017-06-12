import { call, put } from 'redux-saga/effects'
import LocationActions from '../Redux/LocationRedux'

export function * getNearbyUpdates (api, action) {
  let response = yield call(api.getNearby)
  if (response.ok) yield put(LocationActions.updateNearby(response.data))
}
