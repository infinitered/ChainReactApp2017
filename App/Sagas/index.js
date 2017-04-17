import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { ScheduleTypes } from '../Redux/ScheduleRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { trackCurrentTime } from './ScheduleSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(ScheduleTypes.TRACK_CURRENT_TIME, trackCurrentTime)
  ]
}
