import React from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from '../Themes'
import { format, differenceInSeconds } from 'date-fns'
import styles from './Styles/TimeIndicatorStyle'

interface TimeIndicatorProps {
  time: Date
  start: Date
  duration: number
}

const sunIcon = (time: Date) => {
  const currentMinute = (time.getHours() * 60) + time.getMinutes()
  const slope = (22 - 1) / (1150 - 450)
  const mapped = 1 + Math.round(slope * (currentMinute - 450))

  switch (mapped) {
    case 1: return Images.phase1
    case 2: return Images.phase2
    case 3: return Images.phase3
    case 4: return Images.phase4
    case 5: return Images.phase5
    case 6: return Images.phase6
    case 7: return Images.phase7
    case 8: return Images.phase8
    case 9: return Images.phase9
    case 10: return Images.phase10
    case 11: return Images.phase11
    case 12: return Images.phase12
    case 13: return Images.phase13
    case 14: return Images.phase14
    case 15: return Images.phase15
    case 16: return Images.phase16
    case 17: return Images.phase17
    case 18: return Images.phase18
    case 19: return Images.phase19
    case 20: return Images.phase20
    case 21: return Images.phase21
    case 22: return Images.phase22
  }
}

const TimeIndicator = (props: TimeIndicatorProps) => {
  const { time, start, duration } = props
  const formattedTime = format(time, 'h:mm')
  const percentTop = differenceInSeconds(time, start) / (duration * 60) * 100
  const top = `${percentTop}%`

  return (
    <View style={[styles.container, {top}]}>
      <Text style={styles.time}>{formattedTime}</Text>
      <Image source={sunIcon(time)} />
    </View>
  )
}

export default TimeIndicator
