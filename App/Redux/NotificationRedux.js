import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'
const CLEAR_ALL_NOTIFICATIONS = 'CLEAR_ALL_NOTIFICATIONS'

export const addNotification = (message) => {
  const start = Date.now()
  const id = `${message}${start}`

  return {
    type: ADD_NOTIFICATION,
    notification: {id, message, start}
  }
}

export const clearAllNotifications = () => ({
  type: CLEAR_ALL_NOTIFICATIONS
})


/* ------------- Reducer ------------- */

export const notifications = (state=[], action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.notification]
    case CLEAR_ALL_NOTIFICATIONS:
      return []
    default:
      return state
  }
}
