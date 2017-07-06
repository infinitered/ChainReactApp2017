import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import R from 'ramda'

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  notifications: [],
  specialTalks: [],
  playSound: { play: false }
})

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addNotification: ['message'],
  clearNotifications: null,
  addTalk: ['title'],
  removeTalk: ['title'],
  playSound: ['play']
})

export const NotificationTypes = Types
export default Creators

/* ------------- Reducer ------------- */

export const addSingleNotification = (state = INITIAL_STATE, { message }) =>
  state.merge({ notifications: [...state.notifications, message] })

export const clearAllNotifications = (state) =>
  state.merge({notifications: []})

export const addSingleTalk = (state = INITIAL_STATE, { title }) =>
  state.merge({ specialTalks: [...state.specialTalks, title] })

export const removeSingleTalk = (state = INITIAL_STATE, { title }) =>
  state.merge({ specialTalks: R.reject(R.equals(title), state.specialTalks) })

export const playSound = (state = INITIAL_STATE, { play }) => {
  return state.merge({ playSound: play })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_NOTIFICATION]: addSingleNotification,
  [Types.CLEAR_NOTIFICATIONS]: clearAllNotifications,
  [Types.ADD_TALK]: addSingleTalk,
  [Types.REMOVE_TALK]: removeSingleTalk,
  [Types.PLAY_SOUND]: playSound
})
