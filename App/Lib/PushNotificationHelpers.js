import { format } from 'date-fns'
import { Platform } from 'react-native'
import DebugConfig from '../Config/DebugConfig'

const fifteenMinutes = 15 * 60 * 1000

const pushMessage = (title, start) => `${title} begins at ${format(start, 'h:mmA')}.`

// Why such a mess?
// See: https://github.com/zo0r/react-native-push-notification/issues/259
const pushId = (title, start) => {
  const message = pushMessage(title, start)
  if (Platform.OS === 'ios') {
    // string is fine
    return message
  } else {
    // generate unique number in a string
    return message.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return Math.abs(a & a)
    }, 0).toString()
  }
}

// Returns 15 minutes before talk time, unless in debug
const notificationTime = (talkTime) => {
  if (DebugConfig.hotwirePush) {
    return new Date(Date.now() + (5 * 1000))
  } else {
    // pretending today is the day
    if (DebugConfig.hotwireDate) {
      const today = new Date()
      talkTime.setFullYear(today.getFullYear())
      talkTime.setMonth(today.getMonth())
      talkTime.setDate(today.getDate())
    }
    return new Date(talkTime.getTime() - fifteenMinutes)
  }
}

export default {
  notificationTime,
  pushMessage,
  pushId
}
