import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  updateNearby: ['nearby'],
  getNearbyUpdates: null
})

export const LocationTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  nearby: require('../Fixtures/nearby.json')
})

/* ------------- Reducers ------------- */

// Store API
export const updateNearby = (state, { nearby }) => {
  return state.merge({ nearby: nearby })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_NEARBY]: updateNearby
})
