import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  card: {
    margin: Metrics.doubleBaseMargin,
    padding: Metrics.baseMargin,
    borderRadius: 5,
    backgroundColor: 'white'
  }
})
