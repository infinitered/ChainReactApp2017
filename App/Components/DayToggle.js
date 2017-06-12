import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './Styles/DayToggleStyle'

const DayToggle = props => {
  const { activeDay, onPressIn } = props
  const dayStyle = (day) =>
    activeDay === day ? styles.activeDay : styles.inactiveDay

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0.0, 0.38, 1.0]}
      colors={['#46114E', '#521655', '#571757']}
      style={styles.headerGradient}>
      <View style={styles.dayToggle}>
        <TouchableOpacity onPressIn={() => onPressIn(0)}>
          <Text style={dayStyle(0)}>Monday</Text>
        </TouchableOpacity>
        <TouchableOpacity onPressIn={() => onPressIn(1)}>
          <Text style={dayStyle(1)}>Tuesday</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default DayToggle
