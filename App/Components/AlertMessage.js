import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/AlertMessageStyles'

const AlertMessage = ({title, icon, style, show}) => {
  if (show) {
    return (
      <View
        style={[styles.container, style]}
      >
        <View style={styles.contentContainer}>
          <Text allowFontScaling={false} style={styles.message}>{title && title.toUpperCase()}</Text>
        </View>
      </View>
    )
  }
}

AlertMessage.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.object,
  show: PropTypes.bool
}

AlertMessage.defaultProps = {
  show: true
}

export default AlertMessage