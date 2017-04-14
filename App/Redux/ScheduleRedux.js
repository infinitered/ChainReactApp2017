import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  trackCurrentTime: null,
  startCurrentTime: null,
  updateCurrentTime: ['time']
})

export const ScheduleTypes = Types
export default Creators

/* ------------- Initial State ------------- */
let initialTime = new Date()
if (DebugConfig.hotwireDate) {
  initialTime.setFullYear(2017)
  initialTime.setMonth(6)
  initialTime.setDate(17)
}

export const INITIAL_STATE = Immutable({
  currentTime: initialTime
})

/* ------------- Reducers ------------- */

export const updateCurrentTime = (state, { time }) => {
  return state.merge({ currentTime: time })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_CURRENT_TIME]: updateCurrentTime
})
