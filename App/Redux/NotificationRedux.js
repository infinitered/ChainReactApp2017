import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'
const CLEAR_NOTIFICATIONS = 'CLEAR_ALL_NOTIFICATIONS'

export const addNotification = (message) => ({
  type: ADD_NOTIFICATION,
  notification: {
    message,
    start: Date.now()
  }
})

export const clearNotifications = () => ({
  type: CLEAR_NOTIFICATIONS
})


/* ------------- Reducer ------------- */

export const notifications = (state=[], action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.notification]
    case CLEAR_NOTIFICATIONS:
      return []
    default:
      return state
  }
}
