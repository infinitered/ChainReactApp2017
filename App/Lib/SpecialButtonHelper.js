import { LayoutAnimation } from 'react-native'
import PushNotification from 'react-native-push-notification'
import PNHelpers from './PushNotificationHelpers'

const toggleReminder = (title, start, isSpecial, setReminder, removeReminder) => {
  return () => {
    const startCopy = new Date(start.valueOf())
    LayoutAnimation.easeInEaseOut()
    // possible issues on Android: https://github.com/zo0r/react-native-push-notification/issues/368
    if (isSpecial) {
      removeReminder(title)
      PushNotification.cancelLocalNotifications({
        id: PNHelpers.pushId(title, startCopy)
      })
    } else {
      // turn on reminder
      setReminder(title)
      PushNotification.localNotificationSchedule({
        id: PNHelpers.pushId(title, startCopy), // for android cancel
        number: 0,
        message: PNHelpers.pushMessage(title, startCopy), // (required)
        date: PNHelpers.notificationTime(startCopy),
        userInfo: {id: PNHelpers.pushId(title, startCopy)} // for iOS cancel
      })
    }
  }
}

export default {
  toggleReminder
}
