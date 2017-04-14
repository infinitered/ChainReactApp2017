import test from 'ava'
import { put } from 'redux-saga/effects'
import { startup } from '../../App/Sagas/StartupSagas'
import ScheduleActions from '../../App/Redux/ScheduleRedux'

const stepper = (fn) => (mock) => fn.next(mock).value

test('watches for the right action', (t) => {
  const step = stepper(startup())
  ScheduleActions.trackCurrentTime()
  t.deepEqual(step(), put(ScheduleActions.trackCurrentTime()))
})
