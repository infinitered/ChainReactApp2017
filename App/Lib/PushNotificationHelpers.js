import { format } from 'date-fns'
import DebugConfig from '../Config/DebugConfig'

const fifteenMinutes = 15 * 60 * 1000

const pushMessage = (title, start) => `${title} begins at ${format(start, 'h:mmA')}.`

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
  pushMessage
}