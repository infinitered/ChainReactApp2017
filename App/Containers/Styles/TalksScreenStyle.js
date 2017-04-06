import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.snow
  },
  row: {
    flex: 1,
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    color: Colors.text
  },
  label: {
    color: Colors.text
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  dayToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Metrics.doubleBaseMargin,
    height: 85,
    backgroundColor: Colors.headerPurple
  },
  inactiveDay: {
    backgroundColor: Colors.clear,
    fontFamily: 'Avenir-Light',
    fontSize: 17,
    color: 'rgba(255,255,255,0.80)',
    letterSpacing: 0
  },
  activeDay: {
    backgroundColor: Colors.clear,
    fontFamily: 'Avenir-Black',
    fontSize: 17,
    color: 'white',
    letterSpacing: 0
  }
})
